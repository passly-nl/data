import { dto } from '@basmilius/http-client';
import type { CostDto, ShopDto } from '#data/dto';

@dto
export class StatisticsOverviewTopShopDto {
    get shop(): ShopDto {
        return this.#shop;
    }

    set shop(value: ShopDto) {
        this.#shop = value;
    }

    get revenue(): CostDto {
        return this.#revenue;
    }

    set revenue(value: CostDto) {
        this.#revenue = value;
    }

    get orders(): number {
        return this.#orders;
    }

    set orders(value: number) {
        this.#orders = value;
    }

    get tickets(): number {
        return this.#tickets;
    }

    set tickets(value: number) {
        this.#tickets = value;
    }

    #shop: ShopDto;
    #revenue: CostDto;
    #orders: number;
    #tickets: number;

    constructor(shop: ShopDto, revenue: CostDto, orders: number, tickets: number) {
        this.#shop = shop;
        this.#revenue = revenue;
        this.#orders = orders;
        this.#tickets = tickets;
    }
}
