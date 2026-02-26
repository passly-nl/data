import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class StatisticsSalesPurchaseBehaviorDto {
    get averageTimeToPurchase(): number {
        return this.#averageTimeToPurchase;
    }

    set averageTimeToPurchase(value: number) {
        this.#averageTimeToPurchase = value;
    }

    get cartAbandonmentRate(): number {
        return this.#cartAbandonmentRate;
    }

    set cartAbandonmentRate(value: number) {
        this.#cartAbandonmentRate = value;
    }

    get peakBuyingCount(): number {
        return this.#peakBuyingCount;
    }

    set peakBuyingCount(value: number) {
        this.#peakBuyingCount = value;
    }

    get peakBuyingTime(): DateTime {
        return this.#peakBuyingTime;
    }

    set peakBuyingTime(value: DateTime) {
        this.#peakBuyingTime = value;
    }

    #averageTimeToPurchase: number;
    #cartAbandonmentRate: number;
    #peakBuyingCount: number;
    #peakBuyingTime: DateTime;

    constructor(averageTimeToPurchase: number, cartAbandonmentRate: number, peakBuyingCount: number, peakBuyingTime: DateTime) {
        this.#averageTimeToPurchase = averageTimeToPurchase;
        this.#cartAbandonmentRate = cartAbandonmentRate;
        this.#peakBuyingCount = peakBuyingCount;
        this.#peakBuyingTime = peakBuyingTime;
    }
}
