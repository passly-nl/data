import { dto } from '@basmilius/http-client';

@dto
export class EventStatisticsScanTotalsDto {
    get total(): number {
        return this.#total;
    }

    set total(value: number) {
        this.#total = value;
    }

    get checkins(): number {
        return this.#checkins;
    }

    set checkins(value: number) {
        this.#checkins = value;
    }

    get checkouts(): number {
        return this.#checkouts;
    }

    set checkouts(value: number) {
        this.#checkouts = value;
    }

    #total: number;
    #checkins: number;
    #checkouts: number;

    constructor(total: number, checkins: number, checkouts: number) {
        this.#total = total;
        this.#checkins = checkins;
        this.#checkouts = checkouts;
    }
}
