import { dto } from '@basmilius/http-client';
import type { CostDto, OrderDto, PaymentMethodDto } from '../../dto';
import type { TransactionStatus } from '../../types';

@dto
export class TransactionDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get description(): string {
        return this.#description;
    }

    set description(value: string) {
        this.#description = value;
    }

    get status(): TransactionStatus {
        return this.#status;
    }

    set status(value: TransactionStatus) {
        this.#status = value;
    }

    get cost(): CostDto {
        return this.#cost;
    }

    set cost(value: CostDto) {
        this.#cost = value;
    }

    get metadata(): Record<string, unknown> {
        return this.#metadata;
    }

    set metadata(value: Record<string, unknown>) {
        this.#metadata = value;
    }

    get externalCheckoutUrl(): string | null {
        return this.#externalCheckoutUrl;
    }

    set externalCheckoutUrl(value: string | null) {
        this.#externalCheckoutUrl = value;
    }

    get externalDetails(): Record<string, any> | null {
        return this.#externalDetails;
    }

    set externalDetails(value: Record<string, any> | null) {
        this.#externalDetails = value;
    }

    get order(): OrderDto {
        return this.#order;
    }

    set order(value: OrderDto) {
        this.#order = value;
    }

    get paymentMethod(): PaymentMethodDto | null {
        return this.#paymentMethod;
    }

    set paymentMethod(value: PaymentMethodDto | null) {
        this.#paymentMethod = value;
    }

    #id: string;
    #description: string;
    #status: TransactionStatus;
    #cost: CostDto;
    #metadata: Record<string, unknown>;
    #externalCheckoutUrl: string | null;
    #externalDetails: Record<string, any> | null;
    #order: OrderDto;
    #paymentMethod: PaymentMethodDto | null;

    constructor(id: string, description: string, status: TransactionStatus, cost: CostDto, metadata: Record<string, unknown>, externalCheckoutUrl: string | null, externalDetails: Record<string, any> | null, order: OrderDto, paymentMethod: PaymentMethodDto | null) {
        this.#id = id;
        this.#description = description;
        this.#status = status;
        this.#cost = cost;
        this.#metadata = metadata;
        this.#externalCheckoutUrl = externalCheckoutUrl;
        this.#externalDetails = externalDetails;
        this.#order = order;
        this.#paymentMethod = paymentMethod;
    }
}
