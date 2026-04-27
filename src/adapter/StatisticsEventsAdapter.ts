import { adapter, type ForeignData } from '@basmilius/http-client';
import { PaymentAdapter, StatisticsOverviewAdapter } from '#data/adapter';
import { StatisticsEventsOverviewDto, type StatisticsOverviewEventPerformanceDto } from '#data/dto';

@adapter
export class StatisticsEventsAdapter {
    static parseOverview(data: ForeignData): StatisticsEventsOverviewDto {
        return new StatisticsEventsOverviewDto(
            data.total_events,
            data.active_events,
            PaymentAdapter.parseCost(data.average_revenue_per_event),
            data.average_tickets_per_event,
            data.average_sell_through_rate
        );
    }

    static parsePerformance(data: ForeignData): StatisticsOverviewEventPerformanceDto {
        return StatisticsOverviewAdapter.parseEventPerformance(data);
    }
}
