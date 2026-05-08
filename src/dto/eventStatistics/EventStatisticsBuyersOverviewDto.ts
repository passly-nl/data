import { dto } from '@basmilius/http-client';

@dto
export class EventStatisticsBuyersOverviewDto {
    get total(): number {
        return this.#total;
    }

    set total(value: number) {
        this.#total = value;
    }

    get acquired(): number {
        return this.#acquired;
    }

    set acquired(value: number) {
        this.#acquired = value;
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

    get averageTickets(): number {
        return this.#averageTickets;
    }

    set averageTickets(value: number) {
        this.#averageTickets = value;
    }

    #total: number;
    #acquired: number;
    #doubting: number;
    #returning: number;
    #averageTickets: number;

    constructor(total: number, acquired: number, doubting: number, returning: number, averageTickets: number) {
        this.#total = total;
        this.#acquired = acquired;
        this.#doubting = doubting;
        this.#returning = returning;
        this.#averageTickets = averageTickets;
    }
}
