import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsBuyersGeographicDistributionDto {
    get country(): string {
        return this.#country;
    }

    set country(value: string) {
        this.#country = value;
    }

    get buyers(): number {
        return this.#buyers;
    }

    set buyers(value: number) {
        this.#buyers = value;
    }

    get orders(): number {
        return this.#orders;
    }

    set orders(value: number) {
        this.#orders = value;
    }

    get revenue(): CostDto {
        return this.#revenue;
    }

    set revenue(value: CostDto) {
        this.#revenue = value;
    }

    #country: string;
    #buyers: number;
    #orders: number;
    #revenue: CostDto;

    constructor(country: string, buyers: number, orders: number, revenue: CostDto) {
        this.#country = country;
        this.#buyers = buyers;
        this.#orders = orders;
        this.#revenue = revenue;
    }
}
