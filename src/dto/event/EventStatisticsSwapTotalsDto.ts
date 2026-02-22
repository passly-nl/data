import { dto } from '@basmilius/http-client';

@dto
export class EventStatisticsSwapTotalsDto {
    get swaps(): number {
        return this.#swaps;
    }

    set swaps(value: number) {
        this.#swaps = value;
    }

    get tickets(): number {
        return this.#tickets;
    }

    set tickets(value: number) {
        this.#tickets = value;
    }

    get rate(): number {
        return this.#rate;
    }

    set rate(value: number) {
        this.#rate = value;
    }

    #swaps: number;
    #tickets: number;
    #rate: number;

    constructor(swaps: number, tickets: number, rate: number) {
        this.#swaps = swaps;
        this.#tickets = tickets;
        this.#rate = rate;
    }
}
