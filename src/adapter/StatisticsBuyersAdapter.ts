import { adapter, ForeignData } from '@basmilius/http-client';
import { BuyerAdapter, PaymentAdapter, StatisticsAdapter } from '#data/adapter';
import { StatisticsBuyersOverviewDto, StatisticsBuyersRankedDto } from '#data/dto';

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
}
