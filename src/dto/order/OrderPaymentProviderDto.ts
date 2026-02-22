import { dto } from '@basmilius/http-client';

@dto
export class OrderPaymentProviderDto {
    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get url(): string {
        return this.#url;
    }

    set url(value: string) {
        this.#url = value;
    }

    #name: string;
    #url: string;

    constructor(name: string, url: string) {
        this.#name = name;
        this.#url = url;
    }
}
