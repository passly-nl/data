import { dto } from '@basmilius/http-client';

@dto
export class OrderProductDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get description(): string {
        return this.#description;
    }

    set description(value: string) {
        this.#description = value;
    }

    get image(): string | null {
        return this.#image;
    }

    set image(value: string | null) {
        this.#image = value;
    }

    #id: string;
    #name: string;
    #description: string;
    #image: string | null;

    constructor(id: string, name: string, description: string, image: string | null) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#image = image;
    }
}
