import { adapter, ForeignData } from '@basmilius/http-client';
import { PaymentAdapter } from '#data/adapter';
import { EventStatisticsFinancialDto, EventStatisticsKpisDto, EventStatisticsStatusDto } from '#data/dto';

@adapter
export class EventStatisticsOverviewAdapter {
    static parseFinancial(data: ForeignData): EventStatisticsFinancialDto {
        return new EventStatisticsFinancialDto(
            PaymentAdapter.parseCost(data.platform_cost),
            PaymentAdapter.parseCost(data.revenue),
            PaymentAdapter.parseCost(data.net_revenue)
        );
    }

    static parseKpis(data: ForeignData): EventStatisticsKpisDto {
        return new EventStatisticsKpisDto(
            PaymentAdapter.parseCost(data.revenue),
            PaymentAdapter.parseCost(data.platform_cost),
            PaymentAdapter.parseCost(data.net_revenue),
            data.total_orders,
            data.total_tickets_sold,
            data.tickets_capacity,
            data.sell_through_rate,
            data.attendance_rate,
            PaymentAdapter.parseCost(data.average_order_value),
            PaymentAdapter.parseCost(data.average_ticket_price),
            data.unique_buyers
        );
    }

    static parseStatus(data: ForeignData): EventStatisticsStatusDto {
        return new EventStatisticsStatusDto(
            data.fulfilled ?? 0,
            data.interrupted ?? 0,
            data.pending ?? 0,
            data.total ?? 0
        );
    }
}
