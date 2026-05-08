import { dto } from '@basmilius/http-client';

@dto
export class RefundTicketRefDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get code(): string {
        return this.#code;
    }

    set code(value: string) {
        this.#code = value;
    }

    #id: string;
    #code: string;

    constructor(id: string, code: string) {
        this.#id = id;
        this.#code = code;
    }
}
