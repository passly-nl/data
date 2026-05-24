import { dto } from '@basmilius/http-client';

export type StatisticsSalesRepeatPurchaseVelocityBucket =
    | 'within_7_days'
    | 'within_30_days'
    | 'within_90_days'
    | 'within_365_days'
    | 'over_365_days';

@dto
export class StatisticsSalesRepeatPurchaseVelocityDto {
    get averageDaysBetweenOrders(): number {
        return this.#averageDaysBetweenOrders;
    }

    set averageDaysBetweenOrders(value: number) {
        this.#averageDaysBetweenOrders = value;
    }

    get buckets(): Record<StatisticsSalesRepeatPurchaseVelocityBucket, number> {
        return this.#buckets;
    }

    set buckets(value: Record<StatisticsSalesRepeatPurchaseVelocityBucket, number>) {
        this.#buckets = value;
    }

    #averageDaysBetweenOrders: number;
    #buckets: Record<StatisticsSalesRepeatPurchaseVelocityBucket, number>;

    constructor(averageDaysBetweenOrders: number, buckets: Record<StatisticsSalesRepeatPurchaseVelocityBucket, number>) {
        this.#averageDaysBetweenOrders = averageDaysBetweenOrders;
        this.#buckets = buckets;
    }
}
