import { dto } from '@basmilius/http-client';

@dto
export class EventStatisticsBuyerTotalsDto {
    get acquired(): number {
        return this.#acquired;
    }

    set acquired(value: number) {
        this.#acquired = value;
    }

    get averageTickets(): number {
        return this.#averageTickets;
    }

    set averageTickets(value: number) {
        this.#averageTickets = value;
    }

    get doubting(): number {
        return this.#doubting;
    }

    set doubting(value: number) {
        this.#doubting = value;
    }

    get returning(): number {
        return this.#returning;
    }

    set returning(value: number) {
        this.#returning = value;
    }

    get total(): number {
        return this.#total;
    }

    set total(value: number) {
        this.#total = value;
    }

    #acquired: number;
    #averageTickets: number;
    #doubting: number;
    #returning: number;
    #total: number;

    constructor(acquired: number, averageTickets: number, doubting: number, returning: number, total: number) {
        this.#acquired = acquired;
        this.#averageTickets = averageTickets;
        this.#doubting = doubting;
        this.#returning = returning;
        this.#total = total;
    }
}
