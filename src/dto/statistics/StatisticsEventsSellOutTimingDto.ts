import { dto } from '@basmilius/http-client';
import type { StatisticsEventsSellOutTimingEventDto } from '#data/dto';

@dto
export class StatisticsEventsSellOutTimingDto {
    get eventsSoldOut(): number {
        return this.#eventsSoldOut;
    }

    set eventsSoldOut(value: number) {
        this.#eventsSoldOut = value;
    }

    get averageDaysToSellOut(): number {
        return this.#averageDaysToSellOut;
    }

    set averageDaysToSellOut(value: number) {
        this.#averageDaysToSellOut = value;
    }

    get events(): readonly StatisticsEventsSellOutTimingEventDto[] {
        return this.#events;
    }

    set events(value: readonly StatisticsEventsSellOutTimingEventDto[]) {
        this.#events = value;
    }

    #eventsSoldOut: number;
    #averageDaysToSellOut: number;
    #events: readonly StatisticsEventsSellOutTimingEventDto[];

    constructor(eventsSoldOut: number, averageDaysToSellOut: number, events: readonly StatisticsEventsSellOutTimingEventDto[]) {
        this.#eventsSoldOut = eventsSoldOut;
        this.#averageDaysToSellOut = averageDaysToSellOut;
        this.#events = events;
    }
}
