import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsMarketingReferrerDto {
    get host(): string {
        return this.#host;
    }

    set host(value: string) {
        this.#host = value;
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

    #host: string;
    #orders: number;
    #revenue: CostDto;

    constructor(host: string, orders: number, revenue: CostDto) {
        this.#host = host;
        this.#orders = orders;
        this.#revenue = revenue;
    }
}
