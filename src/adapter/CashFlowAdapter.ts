import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter, RefundAdapter } from '#data/adapter';
import { CashFlowDiscountDto, CashFlowDto, CashFlowPaymentDto, CashFlowPlatformCostDto, CashFlowRefundDto, CashFlowTimelineEventDto } from '#data/dto';
import { optional, optionalArray } from '#data/util';

@adapter
export class CashFlowAdapter {
    static parseCashFlow(data: ForeignData): CashFlowDto {
        return new CashFlowDto(
            PaymentAdapter.parseCost(data.subtotal),
            optional(data.discount, CashFlowAdapter.parseCashFlowDiscount),
            PaymentAdapter.parseCost(data.total),
            CashFlowAdapter.parseCashFlowPlatformCost(data.platform_cost),
            optionalArray(data.refunds, CashFlowAdapter.parseCashFlowRefund) ?? [],
            PaymentAdapter.parseCost(data.refunded_total),
            PaymentAdapter.parseCost(data.net_revenue),
            CashFlowAdapter.parseCashFlowPayment(data.payment),
            optionalArray(data.timeline, CashFlowAdapter.parseCashFlowTimelineEvent) ?? []
        );
    }

    static parseCashFlowDiscount(data: ForeignData): CashFlowDiscountDto {
        return new CashFlowDiscountDto(
            data.code,
            PaymentAdapter.parseCost(data.amount),
            data.type
        );
    }

    static parseCashFlowPayment(data: ForeignData): CashFlowPaymentDto {
        return new CashFlowPaymentDto(
            data.status ?? null,
            data.provider ?? null,
            data.method ?? null,
            optional(data.paid_on, DateTimeAdapter.parseDateTime)
        );
    }

    static parseCashFlowPlatformCost(data: ForeignData): CashFlowPlatformCostDto {
        return new CashFlowPlatformCostDto(
            PaymentAdapter.parseCost(data.amount),
            data.is_billable
        );
    }

    static parseCashFlowRefund(data: ForeignData): CashFlowRefundDto {
        return new CashFlowRefundDto(
            data.id,
            PaymentAdapter.parseCost(data.amount),
            data.status,
            data.reason,
            data.reason_label,
            data.note,
            optional(data.initiator, RefundAdapter.parseRefundInitiator),
            optionalArray(data.tickets, RefundAdapter.parseRefundTicketRef) ?? [],
            optional(data.completed_on, DateTimeAdapter.parseDateTime)
        );
    }

    static parseCashFlowTimelineEvent(data: ForeignData): CashFlowTimelineEventDto {
        return new CashFlowTimelineEventDto(
            DateTimeAdapter.parseDateTime(data.at),
            data.type,
            optional(data.amount, PaymentAdapter.parseCost),
            PaymentAdapter.parseCost(data.balance),
            data.description,
            data.details ?? null
        );
    }
}
