import { adapter, ForeignData } from '@basmilius/http-client';
import { BuyerAdapter, PaymentAdapter, StatisticsAdapter } from '#data/adapter';
import { StatisticsBuyersAcquisitionSourceDto, StatisticsBuyersAgeGenderMatrixDto, StatisticsBuyersCohortRetentionDto, StatisticsBuyersDeviceConversionDto, StatisticsBuyersGeographicDistributionDto, StatisticsBuyersOverviewDto, StatisticsBuyersRankedDto, StatisticsBuyersSpendBucketsDto } from '#data/dto';

@adapter
export class StatisticsBuyersAdapter {
    static parseOverview(data: ForeignData): StatisticsBuyersOverviewDto {
        return new StatisticsBuyersOverviewDto(
            StatisticsAdapter.parseTrend(data.buyers, Number),
            StatisticsAdapter.parseTrend(data.new_buyers, Number),
            StatisticsAdapter.parseTrend(data.retention_rate, Number),
            data.total_buyers,
            PaymentAdapter.parseCost(data.lifetime_value_per_buyer),
            data.average_tickets_per_buyer
        );
    }

    static parseRanked(data: ForeignData): StatisticsBuyersRankedDto {
        return new StatisticsBuyersRankedDto(
            data.ranking,
            BuyerAdapter.parseBuyer(data.buyer),
            data.order_count,
            PaymentAdapter.parseCost(data.total_spend),
            data.events_attended,
            PaymentAdapter.parseCost(data.average_order_value)
        );
    }

    static parseGeographicDistribution(data: ForeignData): StatisticsBuyersGeographicDistributionDto {
        return new StatisticsBuyersGeographicDistributionDto(
            data.country,
            data.buyers,
            data.orders,
            PaymentAdapter.parseCost(data.revenue)
        );
    }

    static parseCohortRetention(data: ForeignData): StatisticsBuyersCohortRetentionDto {
        return new StatisticsBuyersCohortRetentionDto(
            data.cohorts,
            data.buckets,
            data.cohort_sizes,
            data.cells
        );
    }

    static parseSpendBuckets(data: ForeignData): StatisticsBuyersSpendBucketsDto {
        return new StatisticsBuyersSpendBucketsDto(
            data.buckets,
            data.total_buyers
        );
    }

    static parseAcquisitionSource(data: ForeignData): StatisticsBuyersAcquisitionSourceDto {
        return new StatisticsBuyersAcquisitionSourceDto(
            data.source,
            data.buyers
        );
    }

    static parseAgeGenderMatrix(data: ForeignData): StatisticsBuyersAgeGenderMatrixDto {
        return new StatisticsBuyersAgeGenderMatrixDto(
            data.age_groups,
            data.genders,
            data.cells
        );
    }

    static parseDeviceConversion(data: ForeignData): StatisticsBuyersDeviceConversionDto {
        return new StatisticsBuyersDeviceConversionDto(
            data.operating_system,
            data.visits,
            data.orders,
            data.conversion_rate
        );
    }
}
