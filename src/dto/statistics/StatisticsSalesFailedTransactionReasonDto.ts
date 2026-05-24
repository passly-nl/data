import { dto } from '@basmilius/http-client';
import type { TransactionStatus } from '#data/types';

@dto
export class StatisticsSalesFailedTransactionReasonDto {
    get status(): TransactionStatus {
        return this.#status;
    }

    set status(value: TransactionStatus) {
        this.#status = value;
    }

    get count(): number {
        return this.#count;
    }

    set count(value: number) {
        this.#count = value;
    }

    #status: TransactionStatus;
    #count: number;

    constructor(status: TransactionStatus, count: number) {
        this.#status = status;
        this.#count = count;
    }
}
