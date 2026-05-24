import { dto } from '@basmilius/http-client';

@dto
export class StatisticsEventsSellOutTimingEventDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get daysToSellOut(): number {
        return this.#daysToSellOut;
    }

    set daysToSellOut(value: number) {
        this.#daysToSellOut = value;
    }

    #id: string;
    #name: string;
    #daysToSellOut: number;

    constructor(id: string, name: string, daysToSellOut: number) {
        this.#id = id;
        this.#name = name;
        this.#daysToSellOut = daysToSellOut;
    }
}
