import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class CashFlowPlatformCostDto {
    get amount(): CostDto {
        return this.#amount;
    }

    set amount(value: CostDto) {
        this.#amount = value;
    }

    get isBillable(): boolean {
        return this.#isBillable;
    }

    set isBillable(value: boolean) {
        this.#isBillable = value;
    }

    #amount: CostDto;
    #isBillable: boolean;

    constructor(amount: CostDto, isBillable: boolean) {
        this.#amount = amount;
        this.#isBillable = isBillable;
    }
}
