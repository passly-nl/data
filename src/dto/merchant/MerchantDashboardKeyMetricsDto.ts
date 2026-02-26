import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

type RevenueGrowth = {
    readonly value: CostDto;
    readonly growth: number;
};

type TicketGrowth = {
    readonly value: number;
    readonly growth: number;
};

@dto
export class MerchantDashboardKeyMetricsDto {
    get revenue(): RevenueGrowth {
        return this.#revenue;
    }

    set revenue(value: RevenueGrowth) {
        this.#revenue = value;
    }

    get tickets(): TicketGrowth {
        return this.#tickets;
    }

    set tickets(value: TicketGrowth) {
        this.#tickets = value;
    }

    get events(): number {
        return this.#events;
    }

    set events(value: number) {
        this.#events = value;
    }

    get tasks(): number {
        return this.#tasks;
    }

    set tasks(value: number) {
        this.#tasks = value;
    }

    #revenue: RevenueGrowth;
    #tickets: TicketGrowth;
    #events: number;
    #tasks: number;

    constructor(revenue: RevenueGrowth, tickets: TicketGrowth, events: number, tasks: number) {
        this.#revenue = revenue;
        this.#tickets = tickets;
        this.#events = events;
        this.#tasks = tasks;
    }
}
