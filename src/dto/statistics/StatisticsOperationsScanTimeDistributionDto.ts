import { dto } from '@basmilius/http-client';

export type StatisticsOperationsScanTimeBucket =
    | 'over_2h_early'
    | '1h_to_2h_early'
    | 'within_1h_early'
    | 'within_1h_late'
    | '1h_to_2h_late'
    | 'over_2h_late';

@dto
export class StatisticsOperationsScanTimeDistributionDto {
    get buckets(): Record<StatisticsOperationsScanTimeBucket, number> {
        return this.#buckets;
    }

    set buckets(value: Record<StatisticsOperationsScanTimeBucket, number>) {
        this.#buckets = value;
    }

    get medianMinutesRelative(): number {
        return this.#medianMinutesRelative;
    }

    set medianMinutesRelative(value: number) {
        this.#medianMinutesRelative = value;
    }

    #buckets: Record<StatisticsOperationsScanTimeBucket, number>;
    #medianMinutesRelative: number;

    constructor(buckets: Record<StatisticsOperationsScanTimeBucket, number>, medianMinutesRelative: number) {
        this.#buckets = buckets;
        this.#medianMinutesRelative = medianMinutesRelative;
    }
}
