import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { AddressDto } from '../../dto';
import type { Gender } from '../../types';

@dto
export class BuyerDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get firstName(): string {
        return this.#firstName;
    }

    set firstName(value: string) {
        this.#firstName = value;
    }

    get lastName(): string {
        return this.#lastName;
    }

    set lastName(value: string) {
        this.#lastName = value;
    }

    get email(): string {
        return this.#email;
    }

    set email(value: string) {
        this.#email = value;
    }

    get phoneNumber(): string {
        return this.#phoneNumber;
    }

    set phoneNumber(value: string) {
        this.#phoneNumber = value;
    }

    get dateOfBirth(): DateTime {
        return this.#dateOfBirth;
    }

    set dateOfBirth(value: DateTime) {
        this.#dateOfBirth = value;
    }

    get gender(): Gender {
        return this.#gender;
    }

    set gender(value: Gender) {
        this.#gender = value;
    }

    get orderCount(): number {
        return this.#orderCount;
    }

    set orderCount(value: number) {
        this.#orderCount = value;
    }

    get fullName(): string {
        return this.#fullName;
    }

    set fullName(value: string) {
        this.#fullName = value;
    }

    get address(): AddressDto | null {
        return this.#address;
    }

    set address(value: AddressDto | null) {
        this.#address = value;
    }

    #id: string;
    #firstName: string;
    #lastName: string;
    #email: string;
    #phoneNumber: string;
    #dateOfBirth: DateTime;
    #gender: Gender;
    #orderCount: number;
    #fullName: string;
    #address: AddressDto | null;

    constructor(id: string, firstName: string, lastName: string, email: string, phoneNumber: string, dateOfBirth: DateTime, gender: Gender, orderCount: number, fullName: string, address: AddressDto | null) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#phoneNumber = phoneNumber;
        this.#dateOfBirth = dateOfBirth;
        this.#gender = gender;
        this.#orderCount = orderCount;
        this.#fullName = fullName;
        this.#address = address;
    }
}
