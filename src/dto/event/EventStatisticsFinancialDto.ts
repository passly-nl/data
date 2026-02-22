import { dto } from '@basmilius/http-client';
import type { CostDto } from '../../dto';

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

    #platformCost: CostDto;
    #revenue: CostDto;

    constructor(platformCost: CostDto, revenue: CostDto) {
        this.#platformCost = platformCost;
        this.#revenue = revenue;
    }
}
