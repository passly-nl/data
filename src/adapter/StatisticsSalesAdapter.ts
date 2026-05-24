import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter } from '#data/adapter';
import { StatisticsSalesDiscountEfficacyDto, StatisticsSalesFailedTransactionReasonDto, StatisticsSalesLifetimeTotalsDto, StatisticsSalesOrderValueDistributionDto, StatisticsSalesPurchaseBehaviorDto, StatisticsSalesRepeatPurchaseVelocityDto, StatisticsSalesTransactionSuccessRateDto } from '#data/dto';

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

    static parseDiscountEfficacy(data: ForeignData): StatisticsSalesDiscountEfficacyDto {
        return new StatisticsSalesDiscountEfficacyDto(
            data.orders_with_discount,
            data.orders_without_discount,
            data.discount_usage_rate,
            PaymentAdapter.parseCost(data.revenue_with_discount),
            PaymentAdapter.parseCost(data.revenue_without_discount),
            PaymentAdapter.parseCost(data.total_discount_amount),
            PaymentAdapter.parseCost(data.average_discount_per_order),
            PaymentAdapter.parseCost(data.average_order_value_with_discount),
            PaymentAdapter.parseCost(data.average_order_value_without_discount)
        );
    }

    static parseOrderValueDistribution(data: ForeignData): StatisticsSalesOrderValueDistributionDto {
        return new StatisticsSalesOrderValueDistributionDto(
            data.buckets,
            PaymentAdapter.parseCost(data.median)
        );
    }

    static parseFailedTransactionReason(data: ForeignData): StatisticsSalesFailedTransactionReasonDto {
        return new StatisticsSalesFailedTransactionReasonDto(
            data.status,
            data.count
        );
    }

    static parseRepeatPurchaseVelocity(data: ForeignData): StatisticsSalesRepeatPurchaseVelocityDto {
        return new StatisticsSalesRepeatPurchaseVelocityDto(
            data.average_days_between_orders,
            data.buckets
        );
    }
}
