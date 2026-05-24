import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOverviewRefundRateKpiDto {
    get current(): number {
        return this.#current;
    }

    set current(value: number) {
        this.#current = value;
    }

    get previous(): number {
        return this.#previous;
    }

    set previous(value: number) {
        this.#previous = value;
    }

    get growthRate(): number {
        return this.#growthRate;
    }

    set growthRate(value: number) {
        this.#growthRate = value;
    }

    get refundCountCurrent(): number {
        return this.#refundCountCurrent;
    }

    set refundCountCurrent(value: number) {
        this.#refundCountCurrent = value;
    }

    get refundCountPrevious(): number {
        return this.#refundCountPrevious;
    }

    set refundCountPrevious(value: number) {
        this.#refundCountPrevious = value;
    }

    #current: number;
    #previous: number;
    #growthRate: number;
    #refundCountCurrent: number;
    #refundCountPrevious: number;

    constructor(current: number, previous: number, growthRate: number, refundCountCurrent: number, refundCountPrevious: number) {
        this.#current = current;
        this.#previous = previous;
        this.#growthRate = growthRate;
        this.#refundCountCurrent = refundCountCurrent;
        this.#refundCountPrevious = refundCountPrevious;
    }
}
