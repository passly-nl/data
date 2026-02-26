import { dto } from '@basmilius/http-client';
import type { StockOverviewItemDto } from '#data/dto';

@dto
export class StockOverviewDto {
    get total(): number {
        return this.#total;
    }

    set total(value: number) {
        this.#total = value;
    }

    get sold(): number {
        return this.#sold;
    }

    set sold(value: number) {
        this.#sold = value;
    }

    get remaining(): number {
        return this.#remaining;
    }

    set remaining(value: number) {
        this.#remaining = value;
    }

    get items(): StockOverviewItemDto[] {
        return this.#items;
    }

    set items(value: StockOverviewItemDto[]) {
        this.#items = value;
    }

    #total: number;
    #sold: number;
    #remaining: number;
    #items: StockOverviewItemDto[];

    constructor(total: number, sold: number, remaining: number, items: StockOverviewItemDto[]) {
        this.#total = total;
        this.#sold = sold;
        this.#remaining = remaining;
        this.#items = items;
    }
}
