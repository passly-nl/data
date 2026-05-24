import { dto } from '@basmilius/http-client';

export type StatisticsEventsTimeToEventBucket =
    | 'same_day'
    | 'within_1_week'
    | 'within_1_month'
    | 'within_3_months'
    | 'within_6_months'
    | 'over_6_months';

@dto
export class StatisticsEventsTimeToEventDto {
    get buckets(): Record<StatisticsEventsTimeToEventBucket, number> {
        return this.#buckets;
    }

    set buckets(value: Record<StatisticsEventsTimeToEventBucket, number>) {
        this.#buckets = value;
    }

    get averageDays(): number {
        return this.#averageDays;
    }

    set averageDays(value: number) {
        this.#averageDays = value;
    }

    #buckets: Record<StatisticsEventsTimeToEventBucket, number>;
    #averageDays: number;

    constructor(buckets: Record<StatisticsEventsTimeToEventBucket, number>, averageDays: number) {
        this.#buckets = buckets;
        this.#averageDays = averageDays;
    }
}
