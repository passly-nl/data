import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter } from '#data/adapter';
import { StatisticsSalesLifetimeTotalsDto, StatisticsSalesPurchaseBehaviorDto, StatisticsSalesTransactionSuccessRateDto } from '#data/dto';

@adapter
export class StatisticsSalesAdapter {
    static parseLifetimeTotals(data: ForeignData): StatisticsSalesLifetimeTotalsDto {
        return new StatisticsSalesLifetimeTotalsDto(
            PaymentAdapter.parseCost(data.total_revenue),
            PaymentAdapter.parseCost(data.total_platform_cost),
            PaymentAdapter.parseCost(data.net_revenue),
            PaymentAdapter.parseCost(data.average_order_value),
            PaymentAdapter.parseCost(data.average_revenue_per_ticket)
        );
    }

    static parsePurchaseBehavior(data: ForeignData): StatisticsSalesPurchaseBehaviorDto {
        return new StatisticsSalesPurchaseBehaviorDto(
            data.average_time_to_purchase,
            data.cart_abandonment_rate,
            data.peak_buying_count,
            DateTimeAdapter.parseDateTime(data.peak_buying_time)
        );
    }

    static parseTransactionSuccessRate(data: ForeignData): StatisticsSalesTransactionSuccessRateDto {
        return new StatisticsSalesTransactionSuccessRateDto(
            data.success_rate,
            data.failed_rate,
            data.reasons
        );
    }
}
