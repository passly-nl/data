import { adapter, ForeignData } from '@basmilius/http-client';
import { PaymentAdapter } from '#data/adapter';
import { StatisticsMarketingCampaignDto, StatisticsMarketingOverviewDto, StatisticsMarketingReferrerDto, StatisticsMarketingShortlinkRoiDto, StatisticsMarketingSourceBreakdownDto, StatisticsMarketingSourceFunnelDto, StatisticsMarketingSourceMediumMatrixDto } from '#data/dto';

@adapter
export class StatisticsMarketingAdapter {
    static parseOverview(data: ForeignData): StatisticsMarketingOverviewDto {
        return new StatisticsMarketingOverviewDto(
            data.attributed_orders,
            data.direct_orders,
            data.attribution_rate,
            PaymentAdapter.parseCost(data.attributed_revenue),
            PaymentAdapter.parseCost(data.direct_revenue),
            data.paid_ad_orders,
            PaymentAdapter.parseCost(data.paid_ad_revenue)
        );
    }

    static parseSourceBreakdown(data: ForeignData): StatisticsMarketingSourceBreakdownDto {
        return new StatisticsMarketingSourceBreakdownDto(
            data.source,
            data.orders,
            data.tickets,
            PaymentAdapter.parseCost(data.revenue)
        );
    }

    static parseTopCampaigns(data: ForeignData): StatisticsMarketingCampaignDto {
        return new StatisticsMarketingCampaignDto(
            data.campaign,
            data.source,
            data.medium,
            data.orders,
            data.tickets,
            PaymentAdapter.parseCost(data.revenue)
        );
    }

    static parseSourceMediumMatrix(data: ForeignData): StatisticsMarketingSourceMediumMatrixDto {
        return new StatisticsMarketingSourceMediumMatrixDto(
            data.sources,
            data.mediums,
            data.cells.map((row: ForeignData[]) => row.map(PaymentAdapter.parseCost))
        );
    }

    static parseTopReferrers(data: ForeignData): StatisticsMarketingReferrerDto {
        return new StatisticsMarketingReferrerDto(
            data.host,
            data.orders,
            PaymentAdapter.parseCost(data.revenue)
        );
    }

    static parseSourceFunnel(data: ForeignData): StatisticsMarketingSourceFunnelDto {
        return new StatisticsMarketingSourceFunnelDto(
            data.source,
            data.reservations,
            data.orders,
            data.conversion_rate
        );
    }

    static parseShortlinkRoi(data: ForeignData): StatisticsMarketingShortlinkRoiDto {
        return new StatisticsMarketingShortlinkRoiDto(
            data.identifier,
            data.hits,
            data.orders,
            PaymentAdapter.parseCost(data.revenue),
            data.conversion_rate,
            data.shop_id ?? null,
            data.shop_name ?? null,
            data.event_id ?? null,
            data.event_name ?? null,
            data.target_url ?? null
        );
    }
}
