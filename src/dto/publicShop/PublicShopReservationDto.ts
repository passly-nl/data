import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { PublicShopReservationProductDto } from '../../dto';

@dto
export class PublicShopReservationDto {
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

    get products(): PublicShopReservationProductDto[] {
        return this.#products;
    }

    set products(value: PublicShopReservationProductDto[]) {
        this.#products = value;
    }

    #id: string;
    #createdOn: DateTime;
    #expiresOn: DateTime;
    #products: PublicShopReservationProductDto[];

    constructor(id: string, createdOn: DateTime, expiresOn: DateTime, products: PublicShopReservationProductDto[]) {
        this.#id = id;
        this.#createdOn = createdOn;
        this.#expiresOn = expiresOn;
        this.#products = products;
    }
}
