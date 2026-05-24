import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOverviewCancellationFunnelDto {
    get paidOrders(): number {
        return this.#paidOrders;
    }

    set paidOrders(value: number) {
        this.#paidOrders = value;
    }

    get ordersWithRefund(): number {
        return this.#ordersWithRefund;
    }

    set ordersWithRefund(value: number) {
        this.#ordersWithRefund = value;
    }

    get ordersFullyRefunded(): number {
        return this.#ordersFullyRefunded;
    }

    set ordersFullyRefunded(value: number) {
        this.#ordersFullyRefunded = value;
    }

    get partialRefundRate(): number {
        return this.#partialRefundRate;
    }

    set partialRefundRate(value: number) {
        this.#partialRefundRate = value;
    }

    get fullRefundRate(): number {
        return this.#fullRefundRate;
    }

    set fullRefundRate(value: number) {
        this.#fullRefundRate = value;
    }

    #paidOrders: number;
    #ordersWithRefund: number;
    #ordersFullyRefunded: number;
    #partialRefundRate: number;
    #fullRefundRate: number;

    constructor(paidOrders: number, ordersWithRefund: number, ordersFullyRefunded: number, partialRefundRate: number, fullRefundRate: number) {
        this.#paidOrders = paidOrders;
        this.#ordersWithRefund = ordersWithRefund;
        this.#ordersFullyRefunded = ordersFullyRefunded;
        this.#partialRefundRate = partialRefundRate;
        this.#fullRefundRate = fullRefundRate;
    }
}
