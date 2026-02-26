import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOverviewKPIsTotalEventsHostedDto {
    get active(): number {
        return this.#active;
    }

    set active(value: number) {
        this.#active = value;
    }

    get concluded(): number {
        return this.#concluded;
    }

    set concluded(value: number) {
        this.#concluded = value;
    }

    get total(): number {
        return this.#total;
    }

    set total(value: number) {
        this.#total = value;
    }

    get upcoming(): number {
        return this.#upcoming;
    }

    set upcoming(value: number) {
        this.#upcoming = value;
    }

    #active: number;
    #concluded: number;
    #total: number;
    #upcoming: number;

    constructor(active: number, concluded: number, total: number, upcoming: number) {
        this.#active = active;
        this.#concluded = concluded;
        this.#total = total;
        this.#upcoming = upcoming;
    }
}
