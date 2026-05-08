import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';
import type { DiscountCodeType } from '#data/types';

@dto
export class CashFlowDiscountDto {
    get code(): string {
        return this.#code;
    }

    set code(value: string) {
        this.#code = value;
    }

    get amount(): CostDto {
        return this.#amount;
    }

    set amount(value: CostDto) {
        this.#amount = value;
    }

    get type(): DiscountCodeType {
        return this.#type;
    }

    set type(value: DiscountCodeType) {
        this.#type = value;
    }

    #code: string;
    #amount: CostDto;
    #type: DiscountCodeType;

    constructor(code: string, amount: CostDto, type: DiscountCodeType) {
        this.#code = code;
        this.#amount = amount;
        this.#type = type;
    }
}
