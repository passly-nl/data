import { dto } from '@basmilius/http-client';
import type { StatisticsOperationsNoShowRateEventDto } from '#data/dto';

@dto
export class StatisticsOperationsNoShowRateDto {
    get validTickets(): number {
        return this.#validTickets;
    }

    set validTickets(value: number) {
        this.#validTickets = value;
    }

    get checkedIn(): number {
        return this.#checkedIn;
    }

    set checkedIn(value: number) {
        this.#checkedIn = value;
    }

    get noShows(): number {
        return this.#noShows;
    }

    set noShows(value: number) {
        this.#noShows = value;
    }

    get noShowRate(): number {
        return this.#noShowRate;
    }

    set noShowRate(value: number) {
        this.#noShowRate = value;
    }

    get events(): readonly StatisticsOperationsNoShowRateEventDto[] {
        return this.#events;
    }

    set events(value: readonly StatisticsOperationsNoShowRateEventDto[]) {
        this.#events = value;
    }

    #validTickets: number;
    #checkedIn: number;
    #noShows: number;
    #noShowRate: number;
    #events: readonly StatisticsOperationsNoShowRateEventDto[];

    constructor(validTickets: number, checkedIn: number, noShows: number, noShowRate: number, events: readonly StatisticsOperationsNoShowRateEventDto[]) {
        this.#validTickets = validTickets;
        this.#checkedIn = checkedIn;
        this.#noShows = noShows;
        this.#noShowRate = noShowRate;
        this.#events = events;
    }
}
