import { dto } from '@basmilius/http-client';

export type StatisticsRefundsVelocityBucket =
    | 'within_1_day'
    | 'within_7_days'
    | 'within_30_days'
    | 'within_90_days'
    | 'over_90_days';

@dto
export class StatisticsRefundsVelocityDto {
    get averageDaysOrderToRefund(): number {
        return this.#averageDaysOrderToRefund;
    }

    set averageDaysOrderToRefund(value: number) {
        this.#averageDaysOrderToRefund = value;
    }

    get averageSecondsRequestToCompletion(): number {
        return this.#averageSecondsRequestToCompletion;
    }

    set averageSecondsRequestToCompletion(value: number) {
        this.#averageSecondsRequestToCompletion = value;
    }

    get buckets(): Record<StatisticsRefundsVelocityBucket, number> {
        return this.#buckets;
    }

    set buckets(value: Record<StatisticsRefundsVelocityBucket, number>) {
        this.#buckets = value;
    }

    #averageDaysOrderToRefund: number;
    #averageSecondsRequestToCompletion: number;
    #buckets: Record<StatisticsRefundsVelocityBucket, number>;

    constructor(averageDaysOrderToRefund: number, averageSecondsRequestToCompletion: number, buckets: Record<StatisticsRefundsVelocityBucket, number>) {
        this.#averageDaysOrderToRefund = averageDaysOrderToRefund;
        this.#averageSecondsRequestToCompletion = averageSecondsRequestToCompletion;
        this.#buckets = buckets;
    }
}
