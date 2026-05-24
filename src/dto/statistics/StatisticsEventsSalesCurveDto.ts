import { dto } from '@basmilius/http-client';
import type { StatisticsEventsSalesCurveEventDto } from '#data/dto';

@dto
export class StatisticsEventsSalesCurveDto {
    get events(): readonly StatisticsEventsSalesCurveEventDto[] {
        return this.#events;
    }

    set events(value: readonly StatisticsEventsSalesCurveEventDto[]) {
        this.#events = value;
    }

    #events: readonly StatisticsEventsSalesCurveEventDto[];

    constructor(events: readonly StatisticsEventsSalesCurveEventDto[]) {
        this.#events = events;
    }
}
