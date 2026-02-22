import { dto } from '@basmilius/http-client';

@dto
export class EventCountersDto {
    get guests(): number {
        return this.#guests;
    }

    set guests(value: number) {
        this.#guests = value;
    }

    get orders(): number {
        return this.#orders;
    }

    set orders(value: number) {
        this.#orders = value;
    }

    get tickets(): number {
        return this.#tickets;
    }

    set tickets(value: number) {
        this.#tickets = value;
    }

    #guests: number;
    #orders: number;
    #tickets: number;

    constructor(guests: number, orders: number, tickets: number) {
        this.#guests = guests;
        this.#orders = orders;
        this.#tickets = tickets;
    }
}
