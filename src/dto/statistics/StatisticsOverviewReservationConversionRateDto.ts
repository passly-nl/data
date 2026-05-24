import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOverviewReservationConversionRateDto {
    get current(): number {
        return this.#current;
    }

    set current(value: number) {
        this.#current = value;
    }

    get previous(): number {
        return this.#previous;
    }

    set previous(value: number) {
        this.#previous = value;
    }

    get growthRate(): number {
        return this.#growthRate;
    }

    set growthRate(value: number) {
        this.#growthRate = value;
    }

    get reservationsCurrent(): number {
        return this.#reservationsCurrent;
    }

    set reservationsCurrent(value: number) {
        this.#reservationsCurrent = value;
    }

    get reservationsPrevious(): number {
        return this.#reservationsPrevious;
    }

    set reservationsPrevious(value: number) {
        this.#reservationsPrevious = value;
    }

    get ordersCurrent(): number {
        return this.#ordersCurrent;
    }

    set ordersCurrent(value: number) {
        this.#ordersCurrent = value;
    }

    get ordersPrevious(): number {
        return this.#ordersPrevious;
    }

    set ordersPrevious(value: number) {
        this.#ordersPrevious = value;
    }

    #current: number;
    #previous: number;
    #growthRate: number;
    #reservationsCurrent: number;
    #reservationsPrevious: number;
    #ordersCurrent: number;
    #ordersPrevious: number;

    constructor(current: number, previous: number, growthRate: number, reservationsCurrent: number, reservationsPrevious: number, ordersCurrent: number, ordersPrevious: number) {
        this.#current = current;
        this.#previous = previous;
        this.#growthRate = growthRate;
        this.#reservationsCurrent = reservationsCurrent;
        this.#reservationsPrevious = reservationsPrevious;
        this.#ordersCurrent = ordersCurrent;
        this.#ordersPrevious = ordersPrevious;
    }
}
