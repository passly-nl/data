import { adapter, type ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter, StatisticsOverviewAdapter } from '#data/adapter';
import { StatisticsEventsOverviewDto, StatisticsEventsSalesCurveDto, StatisticsEventsSalesCurveEventDto, StatisticsEventsSellOutTimingDto, StatisticsEventsSellOutTimingEventDto, StatisticsEventsTimeToEventDto, type StatisticsOverviewEventPerformanceDto } from '#data/dto';

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

    static parseTimeToEvent(data: ForeignData): StatisticsEventsTimeToEventDto {
        return new StatisticsEventsTimeToEventDto(
            data.buckets,
            data.average_days
        );
    }

    static parseSalesCurve(data: ForeignData): StatisticsEventsSalesCurveDto {
        return new StatisticsEventsSalesCurveDto(
            data.events.map(StatisticsEventsAdapter.parseSalesCurveEvent)
        );
    }

    static parseSalesCurveEvent(data: ForeignData): StatisticsEventsSalesCurveEventDto {
        return new StatisticsEventsSalesCurveEventDto(
            data.id,
            data.name,
            DateTimeAdapter.parseDateTime(data.starts_on),
            data.days_before_start,
            data.cumulative_tickets
        );
    }

    static parseSellOutTiming(data: ForeignData): StatisticsEventsSellOutTimingDto {
        return new StatisticsEventsSellOutTimingDto(
            data.events_sold_out,
            data.average_days_to_sell_out,
            data.events.map(StatisticsEventsAdapter.parseSellOutTimingEvent)
        );
    }

    static parseSellOutTimingEvent(data: ForeignData): StatisticsEventsSellOutTimingEventDto {
        return new StatisticsEventsSellOutTimingEventDto(
            data.id,
            data.name,
            data.days_to_sell_out
        );
    }
}
