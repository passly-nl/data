import { dto } from '@basmilius/http-client';

@dto
export class RefundInitiatorDto {
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

    #id: string;
    #name: string;

    constructor(id: string, name: string) {
        this.#id = id;
        this.#name = name;
    }
}
