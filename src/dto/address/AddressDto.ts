import { dto } from '@basmilius/http-client';

@dto
export class AddressDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get label(): string | null {
        return this.#label;
    }

    set label(value: string | null) {
        this.#label = value;
    }

    get street(): string {
        return this.#street;
    }

    set street(value: string) {
        this.#street = value;
    }

    get number(): string {
        return this.#number;
    }

    set number(value: string) {
        this.#number = value;
    }

    get postalCode(): string {
        return this.#postalCode;
    }

    set postalCode(value: string) {
        this.#postalCode = value;
    }

    get city(): string {
        return this.#city;
    }

    set city(value: string) {
        this.#city = value;
    }

    get country(): string {
        return this.#country;
    }

    set country(value: string) {
        this.#country = value;
    }

    get formatted(): string {
        return this.#formatted;
    }

    set formatted(value: string) {
        this.#formatted = value;
    }

    #id: string;
    #label: string | null;
    #street: string;
    #number: string;
    #postalCode: string;
    #city: string;
    #country: string;
    #formatted: string;

    constructor(id: string, label: string | null, street: string, number: string, postalCode: string, city: string, country: string, formatted: string) {
        this.#id = id;
        this.#label = label;
        this.#street = street;
        this.#number = number;
        this.#postalCode = postalCode;
        this.#city = city;
        this.#country = country;
        this.#formatted = formatted;
    }
}
