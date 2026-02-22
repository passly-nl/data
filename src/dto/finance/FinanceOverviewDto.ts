import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class FinanceOverviewDto {
    get estimatedPaymentCost(): CostDto {
        return this.#estimatedPaymentCost;
    }

    set estimatedPaymentCost(value: CostDto) {
        this.#estimatedPaymentCost = value;
    }

    get orders(): Record<string, number> {
        return this.#orders;
    }

    set orders(value: Record<string, number>) {
        this.#orders = value;
    }

    get platformCost(): CostDto {
        return this.#platformCost;
    }

    set platformCost(value: CostDto) {
        this.#platformCost = value;
    }

    get revenue(): CostDto {
        return this.#revenue;
    }

    set revenue(value: CostDto) {
        this.#revenue = value;
    }

    #estimatedPaymentCost: CostDto;
    #orders: Record<string, number>;
    #platformCost: CostDto;
    #revenue: CostDto;

    constructor(estimatedPaymentCost: CostDto, orders: Record<string, number>, platformCost: CostDto, revenue: CostDto) {
        this.#estimatedPaymentCost = estimatedPaymentCost;
        this.#orders = orders;
        this.#platformCost = platformCost;
        this.#revenue = revenue;
    }
}
