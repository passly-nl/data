import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class VatNumberDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get vatNumber(): string {
        return this.#vatNumber;
    }

    set vatNumber(value: string) {
        this.#vatNumber = value;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get address(): string {
        return this.#address;
    }

    set address(value: string) {
        this.#address = value;
    }

    get countryCode(): string {
        return this.#countryCode;
    }

    set countryCode(value: string) {
        this.#countryCode = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get updatedOn(): DateTime {
        return this.#updatedOn;
    }

    set updatedOn(value: DateTime) {
        this.#updatedOn = value;
    }

    #id: string;
    #vatNumber: string;
    #name: string;
    #address: string;
    #countryCode: string;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, vatNumber: string, name: string, address: string, countryCode: string, createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#vatNumber = vatNumber;
        this.#name = name;
        this.#address = address;
        this.#countryCode = countryCode;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
