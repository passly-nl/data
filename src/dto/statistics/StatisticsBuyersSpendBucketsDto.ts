import { dto } from '@basmilius/http-client';

export type StatisticsBuyersSpendBucket =
    | 'no_purchase'
    | 'under_50'
    | '50_250'
    | '250_1000'
    | '1000_5000'
    | 'whales';

@dto
export class StatisticsBuyersSpendBucketsDto {
    get buckets(): Record<StatisticsBuyersSpendBucket, number> {
        return this.#buckets;
    }

    set buckets(value: Record<StatisticsBuyersSpendBucket, number>) {
        this.#buckets = value;
    }

    get totalBuyers(): number {
        return this.#totalBuyers;
    }

    set totalBuyers(value: number) {
        this.#totalBuyers = value;
    }

    #buckets: Record<StatisticsBuyersSpendBucket, number>;
    #totalBuyers: number;

    constructor(buckets: Record<StatisticsBuyersSpendBucket, number>, totalBuyers: number) {
        this.#buckets = buckets;
        this.#totalBuyers = totalBuyers;
    }
}
