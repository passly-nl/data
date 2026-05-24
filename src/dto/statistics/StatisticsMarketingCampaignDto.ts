import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsMarketingCampaignDto {
    get campaign(): string {
        return this.#campaign;
    }

    set campaign(value: string) {
        this.#campaign = value;
    }

    get source(): string {
        return this.#source;
    }

    set source(value: string) {
        this.#source = value;
    }

    get medium(): string {
        return this.#medium;
    }

    set medium(value: string) {
        this.#medium = value;
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

    #campaign: string;
    #source: string;
    #medium: string;
    #orders: number;
    #tickets: number;
    #revenue: CostDto;

    constructor(campaign: string, source: string, medium: string, orders: number, tickets: number, revenue: CostDto) {
        this.#campaign = campaign;
        this.#source = source;
        this.#medium = medium;
        this.#orders = orders;
        this.#tickets = tickets;
        this.#revenue = revenue;
    }
}
