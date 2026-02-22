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

    get timeSlotId(): string | null {
        return this.#timeSlotId;
    }

    set timeSlotId(value: string | null) {
        this.#timeSlotId = value;
    }

    #productId: string;
    #quantity: number;
    #timeSlotId: string | null;

    constructor(productId: string, quantity: number, timeSlotId: string | null) {
        this.#productId = productId;
        this.#quantity = quantity;
        this.#timeSlotId = timeSlotId;
    }
}
