import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsMarketingSourceBreakdownDto {
    get source(): string {
        return this.#source;
    }

    set source(value: string) {
        this.#source = value;
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

    get revenue(): CostDto {
        return this.#revenue;
    }

    set revenue(value: CostDto) {
        this.#revenue = value;
    }

    #source: string;
    #orders: number;
    #tickets: number;
    #revenue: CostDto;

    constructor(source: string, orders: number, tickets: number, revenue: CostDto) {
        this.#source = source;
        this.#orders = orders;
        this.#tickets = tickets;
        this.#revenue = revenue;
    }
}
