import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { TransactionStatus } from '#data/types';

@dto
export class CashFlowPaymentDto {
    get status(): TransactionStatus | null {
        return this.#status;
    }

    set status(value: TransactionStatus | null) {
        this.#status = value;
    }

    get provider(): string | null {
        return this.#provider;
    }

    set provider(value: string | null) {
        this.#provider = value;
    }

    get method(): string | null {
        return this.#method;
    }

    set method(value: string | null) {
        this.#method = value;
    }

    get paidOn(): DateTime | null {
        return this.#paidOn;
    }

    set paidOn(value: DateTime | null) {
        this.#paidOn = value;
    }

    #status: TransactionStatus | null;
    #provider: string | null;
    #method: string | null;
    #paidOn: DateTime | null;

    constructor(status: TransactionStatus | null, provider: string | null, method: string | null, paidOn: DateTime | null) {
        this.#status = status;
        this.#provider = provider;
        this.#method = method;
        this.#paidOn = paidOn;
    }
}
