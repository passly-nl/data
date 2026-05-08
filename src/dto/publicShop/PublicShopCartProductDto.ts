import { dto } from '@basmilius/http-client';

@dto
export class PublicShopCartProductDto {
    get productId(): string {
        return this.#productId;
    }

    set productId(value: string) {
        this.#productId = value;
    }

    get quantity(): number {
        return this.#quantity;
    }

    set quantity(value: number) {
        this.#quantity = value;
    }

    #productId: string;
    #quantity: number;

    constructor(productId: string, quantity: number) {
        this.#productId = productId;
        this.#quantity = quantity;
    }
}
