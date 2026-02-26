import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { ReservationItemDto } from '#data/dto';

@dto
export class ReservationDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get expiresOn(): DateTime {
        return this.#expiresOn;
    }

    set expiresOn(value: DateTime) {
        this.#expiresOn = value;
    }

    get isExpired(): boolean {
        return this.#isExpired;
    }

    set isExpired(value: boolean) {
        this.#isExpired = value;
    }

    get items(): ReservationItemDto[] {
        return this.#items;
    }

    set items(value: ReservationItemDto[]) {
        this.#items = value;
    }

    #id: string;
    #createdOn: DateTime;
    #expiresOn: DateTime;
    #isExpired: boolean;
    #items: ReservationItemDto[];

    constructor(id: string, createdOn: DateTime, expiresOn: DateTime, isExpired: boolean, items: ReservationItemDto[]) {
        this.#id = id;
        this.#createdOn = createdOn;
        this.#expiresOn = expiresOn;
        this.#isExpired = isExpired;
        this.#items = items;
    }
}
