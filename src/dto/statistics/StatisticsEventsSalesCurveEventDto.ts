import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class StatisticsEventsSalesCurveEventDto {
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

    get startsOn(): DateTime {
        return this.#startsOn;
    }

    set startsOn(value: DateTime) {
        this.#startsOn = value;
    }

    get daysBeforeStart(): readonly number[] {
        return this.#daysBeforeStart;
    }

    set daysBeforeStart(value: readonly number[]) {
        this.#daysBeforeStart = value;
    }

    get cumulativeTickets(): readonly number[] {
        return this.#cumulativeTickets;
    }

    set cumulativeTickets(value: readonly number[]) {
        this.#cumulativeTickets = value;
    }

    #id: string;
    #name: string;
    #startsOn: DateTime;
    #daysBeforeStart: readonly number[];
    #cumulativeTickets: readonly number[];

    constructor(id: string, name: string, startsOn: DateTime, daysBeforeStart: readonly number[], cumulativeTickets: readonly number[]) {
        this.#id = id;
        this.#name = name;
        this.#startsOn = startsOn;
        this.#daysBeforeStart = daysBeforeStart;
        this.#cumulativeTickets = cumulativeTickets;
    }
}
