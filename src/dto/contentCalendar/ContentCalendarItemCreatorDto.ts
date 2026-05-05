import { dto } from '@basmilius/http-client';
import type { PictureDto } from '#data/dto';

@dto
export class ContentCalendarItemCreatorDto {
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

    get picture(): PictureDto | null {
        return this.#picture;
    }

    set picture(value: PictureDto | null) {
        this.#picture = value;
    }

    #id: string;
    #firstName: string;
    #lastName: string;
    #fullName: string;
    #initials: string;
    #picture: PictureDto | null;

    constructor(id: string, firstName: string, lastName: string, fullName: string, initials: string, picture: PictureDto | null) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#fullName = fullName;
        this.#initials = initials;
        this.#picture = picture;
    }
}
