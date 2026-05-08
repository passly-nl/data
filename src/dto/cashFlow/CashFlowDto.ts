import { dto } from '@basmilius/http-client';
import type { CashFlowDiscountDto, CashFlowPaymentDto, CashFlowPlatformCostDto, CashFlowRefundDto, CashFlowTimelineEventDto, CostDto } from '#data/dto';

@dto
export class CashFlowDto {
    get subtotal(): CostDto {
        return this.#subtotal;
    }

    set subtotal(value: CostDto) {
        this.#subtotal = value;
    }

    get discount(): CashFlowDiscountDto | null {
        return this.#discount;
    }

    set discount(value: CashFlowDiscountDto | null) {
        this.#discount = value;
    }

    get total(): CostDto {
        return this.#total;
    }

    set total(value: CostDto) {
        this.#total = value;
    }

    get platformCost(): CashFlowPlatformCostDto {
        return this.#platformCost;
    }

    set platformCost(value: CashFlowPlatformCostDto) {
        this.#platformCost = value;
    }

    get refunds(): CashFlowRefundDto[] {
        return this.#refunds;
    }

    set refunds(value: CashFlowRefundDto[]) {
        this.#refunds = value;
    }

    get refundedTotal(): CostDto {
        return this.#refundedTotal;
    }

    set refundedTotal(value: CostDto) {
        this.#refundedTotal = value;
    }

    get netRevenue(): CostDto {
        return this.#netRevenue;
    }

    set netRevenue(value: CostDto) {
        this.#netRevenue = value;
    }

    get payment(): CashFlowPaymentDto {
        return this.#payment;
    }

    set payment(value: CashFlowPaymentDto) {
        this.#payment = value;
    }

    get timeline(): CashFlowTimelineEventDto[] {
        return this.#timeline;
    }

    set timeline(value: CashFlowTimelineEventDto[]) {
        this.#timeline = value;
    }

    #subtotal: CostDto;
    #discount: CashFlowDiscountDto | null;
    #total: CostDto;
    #platformCost: CashFlowPlatformCostDto;
    #refunds: CashFlowRefundDto[];
    #refundedTotal: CostDto;
    #netRevenue: CostDto;
    #payment: CashFlowPaymentDto;
    #timeline: CashFlowTimelineEventDto[];

    constructor(subtotal: CostDto, discount: CashFlowDiscountDto | null, total: CostDto, platformCost: CashFlowPlatformCostDto, refunds: CashFlowRefundDto[], refundedTotal: CostDto, netRevenue: CostDto, payment: CashFlowPaymentDto, timeline: CashFlowTimelineEventDto[]) {
        this.#subtotal = subtotal;
        this.#discount = discount;
        this.#total = total;
        this.#platformCost = platformCost;
        this.#refunds = refunds;
        this.#refundedTotal = refundedTotal;
        this.#netRevenue = netRevenue;
        this.#payment = payment;
        this.#timeline = timeline;
    }
}
