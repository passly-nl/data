import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class EventStatisticsFinancialDto {
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

    get netRevenue(): CostDto {
        return this.#netRevenue;
    }

    set netRevenue(value: CostDto) {
        this.#netRevenue = value;
    }

    #platformCost: CostDto;
    #revenue: CostDto;
    #netRevenue: CostDto;

    constructor(platformCost: CostDto, revenue: CostDto, netRevenue: CostDto) {
        this.#platformCost = platformCost;
        this.#revenue = revenue;
        this.#netRevenue = netRevenue;
    }
}
