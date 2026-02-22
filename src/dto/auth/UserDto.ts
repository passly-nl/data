import { dto } from '@basmilius/http-client';
import type { PictureDto } from '#data/dto';

@dto
export class UserDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get email(): string {
        return this.#email;
    }

    set email(value: string) {
        this.#email = value;
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

    get fullName(): string {
        return this.#fullName;
    }

    set fullName(value: string) {
        this.#fullName = value;
    }

    get initials(): string {
        return this.#initials;
    }

    set initials(value: string) {
        this.#initials = value;
    }

    get phoneNumber(): string | null {
        return this.#phoneNumber;
    }

    set phoneNumber(value: string | null) {
        this.#phoneNumber = value;
    }

    get isOnline(): boolean {
        return this.#isOnline;
    }

    set isOnline(value: boolean) {
        this.#isOnline = value;
    }

    get picture(): PictureDto | null {
        return this.#picture;
    }

    set picture(value: PictureDto | null) {
        this.#picture = value;
    }

    #id: string;
    #email: string;
    #firstName: string;
    #lastName: string;
    #fullName: string;
    #initials: string;
    #phoneNumber: string | null;
    #isOnline: boolean;
    #picture: PictureDto | null;

    constructor(id: string, email: string, firstName: string, lastName: string, fullName: string, initials: string, phoneNumber: string | null, isOnline: boolean, picture: PictureDto | null) {
        this.#id = id;
        this.#email = email;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#fullName = fullName;
        this.#initials = initials;
        this.#phoneNumber = phoneNumber;
        this.#isOnline = isOnline;
        this.#picture = picture;
    }
}
