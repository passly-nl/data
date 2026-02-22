import { dto } from '@basmilius/http-client';

@dto
export class ShopDesignDto {
    get backgroundColor(): string {
        return this.#backgroundColor;
    }

    set backgroundColor(value: string) {
        this.#backgroundColor = value;
    }

    get foregroundColor(): string {
        return this.#foregroundColor;
    }

    set foregroundColor(value: string) {
        this.#foregroundColor = value;
    }

    get primaryColor(): string {
        return this.#primaryColor;
    }

    set primaryColor(value: string) {
        this.#primaryColor = value;
    }

    #backgroundColor: string;
    #foregroundColor: string;
    #primaryColor: string;

    constructor(backgroundColor: string, foregroundColor: string, primaryColor: string) {
        this.#backgroundColor = backgroundColor;
        this.#foregroundColor = foregroundColor;
        this.#primaryColor = primaryColor;
    }
}
