import { dto } from '@basmilius/http-client';

@dto
export class StatisticsRefundsAmountDistributionDto {
    get full(): number {
        return this.#full;
    }

    set full(value: number) {
        this.#full = value;
    }

    get partial(): number {
        return this.#partial;
    }

    set partial(value: number) {
        this.#partial = value;
    }

    get averagePartialRatio(): number {
        return this.#averagePartialRatio;
    }

    set averagePartialRatio(value: number) {
        this.#averagePartialRatio = value;
    }

    #full: number;
    #partial: number;
    #averagePartialRatio: number;

    constructor(full: number, partial: number, averagePartialRatio: number) {
        this.#full = full;
        this.#partial = partial;
        this.#averagePartialRatio = averagePartialRatio;
    }
}
