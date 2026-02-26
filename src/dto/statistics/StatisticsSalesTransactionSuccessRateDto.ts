import { dto } from '@basmilius/http-client';
import type { TransactionStatus } from '../../types';

@dto
export class StatisticsSalesTransactionSuccessRateDto {
    get successRate(): number {
        return this.#successRate;
    }

    set successRate(value: number) {
        this.#successRate = value;
    }

    get failedRate(): number {
        return this.#failedRate;
    }

    set failedRate(value: number) {
        this.#failedRate = value;
    }

    get reasons(): Record<TransactionStatus, number> {
        return this.#reasons;
    }

    set reasons(value: Record<TransactionStatus, number>) {
        this.#reasons = value;
    }

    #successRate: number;
    #failedRate: number;
    #reasons: Record<TransactionStatus, number>;

    constructor(successRate: number, failedRate: number, reasons: Record<TransactionStatus, number>) {
        this.#successRate = successRate;
        this.#failedRate = failedRate;
        this.#reasons = reasons;
    }
}
