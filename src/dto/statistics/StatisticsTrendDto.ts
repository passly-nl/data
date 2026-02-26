import { dto } from '@basmilius/http-client';

@dto
export class StatisticsTrendDto<TValue> {
    get current(): TValue {
        return this.#current;
    }

    set current(value: TValue) {
        this.#current = value;
    }

    get previous(): TValue {
        return this.#previous;
    }

    set previous(value: TValue) {
        this.#previous = value;
    }

    get growthRate(): number {
        return this.#growthRate;
    }

    set growthRate(value: number) {
        this.#growthRate = value;
    }

    #current: TValue;
    #previous: TValue;
    #growthRate: number;

    constructor(current: TValue, previous: TValue, growthRate: number) {
        this.#current = current;
        this.#previous = previous;
        this.#growthRate = growthRate;
    }
}
