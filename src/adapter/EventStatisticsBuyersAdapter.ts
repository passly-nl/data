import { adapter, ForeignData } from '@basmilius/http-client';
import { BuyerAdapter, PaymentAdapter } from '#data/adapter';
import { EventStatisticsBuyersOverviewDto, StatisticsBuyersRankedDto } from '#data/dto';

@adapter
export class EventStatisticsBuyersAdapter {
    static parseOverview(data: ForeignData): EventStatisticsBuyersOverviewDto {
        return new EventStatisticsBuyersOverviewDto(
            data.total,
            data.acquired,
            data.doubting,
            data.returning,
            data.average_tickets
        );
    }

    static parseRanked(data: ForeignData): StatisticsBuyersRankedDto {
        return new StatisticsBuyersRankedDto(
            data.ranking,
            BuyerAdapter.parseBuyer(data.buyer),
            data.order_count,
            PaymentAdapter.parseCost(data.total_spend),
            data.events_attended ?? 0,
            PaymentAdapter.parseCost(data.average_order_value)
        );
    }
}
