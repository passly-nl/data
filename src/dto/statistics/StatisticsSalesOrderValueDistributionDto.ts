import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

export type StatisticsSalesOrderValueBucket =
    | 'under_25'
    | '25_50'
    | '50_100'
    | '100_250'
    | '250_500'
    | '500_1000'
    | 'over_1000';

@dto
export class StatisticsSalesOrderValueDistributionDto {
    get buckets(): Record<StatisticsSalesOrderValueBucket, number> {
        return this.#buckets;
    }

    set buckets(value: Record<StatisticsSalesOrderValueBucket, number>) {
        this.#buckets = value;
    }

    get median(): CostDto {
        return this.#median;
    }

    set median(value: CostDto) {
        this.#median = value;
    }

    #buckets: Record<StatisticsSalesOrderValueBucket, number>;
    #median: CostDto;

    constructor(buckets: Record<StatisticsSalesOrderValueBucket, number>, median: CostDto) {
        this.#buckets = buckets;
        this.#median = median;
    }
}
