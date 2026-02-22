import { dto } from '@basmilius/http-client';
import type { PublicShopReservationProductDetailsDto } from '../../dto';

@dto
export class PublicShopReservationProductDto {
    get product(): PublicShopReservationProductDetailsDto {
        return this.#product;
    }

    set product(value: PublicShopReservationProductDetailsDto) {
        this.#product = value;
    }

    get quantity(): number {
        return this.#quantity;
    }

    set quantity(value: number) {
        this.#quantity = value;
    }

    #product: PublicShopReservationProductDetailsDto;
    #quantity: number;

    constructor(product: PublicShopReservationProductDetailsDto, quantity: number) {
        this.#product = product;
        this.#quantity = quantity;
    }
}
