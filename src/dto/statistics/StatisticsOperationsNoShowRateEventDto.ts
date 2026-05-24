import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOperationsNoShowRateEventDto {
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

    get noShowRate(): number {
        return this.#noShowRate;
    }

    set noShowRate(value: number) {
        this.#noShowRate = value;
    }

    get noShows(): number {
        return this.#noShows;
    }

    set noShows(value: number) {
        this.#noShows = value;
    }

    get ticketsSold(): number {
        return this.#ticketsSold;
    }

    set ticketsSold(value: number) {
        this.#ticketsSold = value;
    }

    #id: string;
    #name: string;
    #noShowRate: number;
    #noShows: number;
    #ticketsSold: number;

    constructor(id: string, name: string, noShowRate: number, noShows: number, ticketsSold: number) {
        this.#id = id;
        this.#name = name;
        this.#noShowRate = noShowRate;
        this.#noShows = noShows;
        this.#ticketsSold = ticketsSold;
    }
}
