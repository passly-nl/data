import { dto } from '@basmilius/http-client';

@dto
export class EventStatisticsStatusDto {
    get fulfilled(): number {
        return this.#fulfilled;
    }

    set fulfilled(value: number) {
        this.#fulfilled = value;
    }

    get interrupted(): number {
        return this.#interrupted;
    }

    set interrupted(value: number) {
        this.#interrupted = value;
    }

    get pending(): number {
        return this.#pending;
    }

    set pending(value: number) {
        this.#pending = value;
    }

    get total(): number {
        return this.#total;
    }

    set total(value: number) {
        this.#total = value;
    }

    #fulfilled: number;
    #interrupted: number;
    #pending: number;
    #total: number;

    constructor(fulfilled: number, interrupted: number, pending: number, total: number) {
        this.#fulfilled = fulfilled;
        this.#interrupted = interrupted;
        this.#pending = pending;
        this.#total = total;
    }
}
