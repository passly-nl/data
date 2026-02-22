import { dto } from '@basmilius/http-client';

@dto
export class PaymentMethodDto {
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

    get image(): string {
        return this.#image;
    }

    set image(value: string) {
        this.#image = value;
    }

    #id: string;
    #name: string;
    #image: string;

    constructor(id: string, name: string, image: string) {
        this.#id = id;
        this.#name = name;
        this.#image = image;
    }
}
