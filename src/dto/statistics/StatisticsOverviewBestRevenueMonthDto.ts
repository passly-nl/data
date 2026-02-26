import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { type CostDto } from '#data/dto';

@dto
export class StatisticsOverviewBestRevenueMonthDto {
    get period(): DateTime {
        return this.#period;
    }

    set period(value: DateTime) {
        this.#period = value;
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

    #period: DateTime;
    #revenue: CostDto;
    #orders: number;
    #tickets: number;

    constructor(period: DateTime, revenue: CostDto, orders: number, tickets: number) {
        this.#period = period;
        this.#revenue = revenue;
        this.#orders = orders;
        this.#tickets = tickets;
    }
}
