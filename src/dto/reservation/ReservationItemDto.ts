import { dto } from '@basmilius/http-client';
import type { ReservationProductDto } from '#data/dto';

@dto
export class ReservationItemDto {
    get quantity(): number {
        return this.#quantity;
    }

    set quantity(value: number) {
        this.#quantity = value;
    }

    get product(): ReservationProductDto {
        return this.#product;
    }

    set product(value: ReservationProductDto) {
        this.#product = value;
    }

    #quantity: number;
    #product: ReservationProductDto;

    constructor(quantity: number, product: ReservationProductDto) {
        this.#quantity = quantity;
        this.#product = product;
    }
}
