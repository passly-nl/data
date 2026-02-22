import { dto } from '@basmilius/http-client';

@dto
export class CostDto {
    get currencyCode(): string {
        return this.#currencyCode;
    }

    set currencyCode(value: string) {
        this.#currencyCode = value;
    }

    get currencyDecimals(): number {
        return this.#currencyDecimals;
    }

    set currencyDecimals(value: number) {
        this.#currencyDecimals = value;
    }

    get currencySign(): string {
        return this.#currencySign;
    }

    set currencySign(value: string) {
        this.#currencySign = value;
    }

    get decimal(): number {
        return this.#decimal;
    }

    set decimal(value: number) {
        this.#decimal = value;
    }

    get formatted(): string {
        return this.#formatted;
    }

    set formatted(value: string) {
        this.#formatted = value;
    }

    get cents(): number {
        return this.#cents;
    }

    set cents(value: number) {
        this.#cents = value;
    }

    #currencyCode: string;
    #currencyDecimals: number;
    #currencySign: string;
    #decimal: number;
    #formatted: string;
    #cents: number;

    constructor(currencyCode: string, currencyDecimals: number, currencySign: string, decimal: number, formatted: string, cents: number) {
        this.#currencyCode = currencyCode;
        this.#currencyDecimals = currencyDecimals;
        this.#currencySign = currencySign;
        this.#decimal = decimal;
        this.#formatted = formatted;
        this.#cents = cents;
    }
}
