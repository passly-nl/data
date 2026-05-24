import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, EventAdapter, FileSystemAdapter, PaymentAdapter, StatisticsAdapter } from '#data/adapter';
import { StatisticsOverviewBestRevenueMonthDto, StatisticsOverviewCancellationFunnelDto, StatisticsOverviewEventPerformanceDto, StatisticsOverviewEventPerformanceEventDto, StatisticsOverviewEventPerformanceSummaryDto, StatisticsOverviewKPIsDto, StatisticsOverviewKPIsTotalEventsHostedDto, StatisticsOverviewKPIsTotalRevenueDto, StatisticsOverviewKPIsTotalTicketsSoldDto, StatisticsOverviewReservationConversionRateDto, StatisticsOverviewTopShopDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class StatisticsOverviewAdapter {
    static parseBestRevenueMonth(data: ForeignData): StatisticsOverviewBestRevenueMonthDto {
        return new StatisticsOverviewBestRevenueMonthDto(
            DateTimeAdapter.parseDateTimeFromMonth(data.period),
            PaymentAdapter.parseCost(data.revenue),
            data.orders,
            data.tickets
        );
    }

    static parseEventPerformance(data: ForeignData): StatisticsOverviewEventPerformanceDto {
        return new StatisticsOverviewEventPerformanceDto(
            data.events.map(StatisticsOverviewAdapter.parseEventPerformanceEvent),
            StatisticsOverviewAdapter.parseEventPerformanceSummary(data.summary)
        );
    }

    static parseEventPerformanceEvent(data: ForeignData): StatisticsOverviewEventPerformanceEventDto {
        return new StatisticsOverviewEventPerformanceEventDto(
            data.id,
            data.name,
            DateTimeAdapter.parseDateTime(data.starts_on),
            DateTimeAdapter.parseDateTime(data.ends_on),
            optional(data.header_file, FileSystemAdapter.parsePicture),
            data.status,
            PaymentAdapter.parseCost(data.revenue),
            data.tickets_sold,
            data.tickets_total,
            data.sell_through_rate,
            data.attendance_rate,
            data.attended_count,
            data.orders_count
        );
    }

    static parseEventPerformanceSummary(data: ForeignData): StatisticsOverviewEventPerformanceSummaryDto {
        return new StatisticsOverviewEventPerformanceSummaryDto(
            PaymentAdapter.parseCost(data.total_revenue),
            data.total_tickets_sold,
            data.total_tickets_capacity,
            data.average_sell_through_rate,
            data.average_attendance_rate
        );
    }

    static parseKPIs(data: ForeignData): StatisticsOverviewKPIsDto {
        return new StatisticsOverviewKPIsDto(
            StatisticsOverviewAdapter.parseKPIsTotalRevenue(data.total_revenue),
            StatisticsOverviewAdapter.parseKPIsTotalTicketsSold(data.total_tickets_sold),
            StatisticsOverviewAdapter.parseKPIsTotalEventsHosted(data.total_events_hosted),
            data.total_customers,
            PaymentAdapter.parseCost(data.average_order_value),
            data.average_attendance_rate
        );
    }

    static parseKPIsTotalEventsHosted(data: ForeignData): StatisticsOverviewKPIsTotalEventsHostedDto {
        return new StatisticsOverviewKPIsTotalEventsHostedDto(
            data.active,
            data.concluded,
            data.total,
            data.upcoming
        );
    }

    static parseKPIsTotalRevenue(data: ForeignData): StatisticsOverviewKPIsTotalRevenueDto {
        return new StatisticsOverviewKPIsTotalRevenueDto(
            PaymentAdapter.parseCost(data.lifetime),
            StatisticsAdapter.parseTrend(data.trend, PaymentAdapter.parseCost)
        );
    }

    static parseKPIsTotalTicketsSold(data: ForeignData): StatisticsOverviewKPIsTotalTicketsSoldDto {
        return new StatisticsOverviewKPIsTotalTicketsSoldDto(
            data.lifetime,
            StatisticsAdapter.parseTrend(data.trend, Number)
        );
    }

    static parseTopShop(data: ForeignData): StatisticsOverviewTopShopDto {
        return new StatisticsOverviewTopShopDto(
            EventAdapter.parseShop(data.shop),
            PaymentAdapter.parseCost(data.revenue),
            data.orders,
            data.tickets
        );
    }

    static parseCancellationFunnel(data: ForeignData): StatisticsOverviewCancellationFunnelDto {
        return new StatisticsOverviewCancellationFunnelDto(
            data.paid_orders,
            data.orders_with_refund,
            data.orders_fully_refunded,
            data.partial_refund_rate,
            data.full_refund_rate
        );
    }

    static parseReservationConversionRate(data: ForeignData): StatisticsOverviewReservationConversionRateDto {
        return new StatisticsOverviewReservationConversionRateDto(
            data.current,
            data.previous,
            data.growth_rate,
            data.reservations_current,
            data.reservations_previous,
            data.orders_current,
            data.orders_previous
        );
    }
}
