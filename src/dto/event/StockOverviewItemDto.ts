import { dto } from '@basmilius/http-client';
import type { ProductDto, StockPoolDto } from '#data/dto';

@dto
export class StockOverviewItemDto {
    get pool(): StockPoolDto {
        return this.#pool;
    }

    set pool(value: StockPoolDto) {
        this.#pool = value;
    }

    get product(): ProductDto {
        return this.#product;
    }

    set product(value: ProductDto) {
        this.#product = value;
    }

    get remaining(): number {
        return this.#remaining;
    }

    set remaining(value: number) {
        this.#remaining = value;
    }

    get sold(): number {
        return this.#sold;
    }

    set sold(value: number) {
        this.#sold = value;
    }

    #pool: StockPoolDto;
    #product: ProductDto;
    #remaining: number;
    #sold: number;

    constructor(pool: StockPoolDto, product: ProductDto, remaining: number, sold: number) {
        this.#pool = pool;
        this.#product = product;
        this.#remaining = remaining;
        this.#sold = sold;
    }
}
