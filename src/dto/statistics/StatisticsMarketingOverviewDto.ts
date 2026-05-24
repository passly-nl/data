import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsMarketingOverviewDto {
    get attributedOrders(): number {
        return this.#attributedOrders;
    }

    set attributedOrders(value: number) {
        this.#attributedOrders = value;
    }

    get directOrders(): number {
        return this.#directOrders;
    }

    set directOrders(value: number) {
        this.#directOrders = value;
    }

    get attributionRate(): number {
        return this.#attributionRate;
    }

    set attributionRate(value: number) {
        this.#attributionRate = value;
    }

    get attributedRevenue(): CostDto {
        return this.#attributedRevenue;
    }

    set attributedRevenue(value: CostDto) {
        this.#attributedRevenue = value;
    }

    get directRevenue(): CostDto {
        return this.#directRevenue;
    }

    set directRevenue(value: CostDto) {
        this.#directRevenue = value;
    }

    get paidAdOrders(): number {
        return this.#paidAdOrders;
    }

    set paidAdOrders(value: number) {
        this.#paidAdOrders = value;
    }

    get paidAdRevenue(): CostDto {
        return this.#paidAdRevenue;
    }

    set paidAdRevenue(value: CostDto) {
        this.#paidAdRevenue = value;
    }

    #attributedOrders: number;
    #directOrders: number;
    #attributionRate: number;
    #attributedRevenue: CostDto;
    #directRevenue: CostDto;
    #paidAdOrders: number;
    #paidAdRevenue: CostDto;

    constructor(attributedOrders: number, directOrders: number, attributionRate: number, attributedRevenue: CostDto, directRevenue: CostDto, paidAdOrders: number, paidAdRevenue: CostDto) {
        this.#attributedOrders = attributedOrders;
        this.#directOrders = directOrders;
        this.#attributionRate = attributionRate;
        this.#attributedRevenue = attributedRevenue;
        this.#directRevenue = directRevenue;
        this.#paidAdOrders = paidAdOrders;
        this.#paidAdRevenue = paidAdRevenue;
    }
}
