import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto } from '#data/dto';

@dto
export class ContractDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get startsOn(): DateTime {
        return this.#startsOn;
    }

    set startsOn(value: DateTime) {
        this.#startsOn = value;
    }

    get endsOn(): DateTime {
        return this.#endsOn;
    }

    set endsOn(value: DateTime) {
        this.#endsOn = value;
    }

    get fee(): CostDto {
        return this.#fee;
    }

    set fee(value: CostDto) {
        this.#fee = value;
    }

    get remark(): string {
        return this.#remark;
    }

    set remark(value: string) {
        this.#remark = value;
    }

    #id: string;
    #startsOn: DateTime;
    #endsOn: DateTime;
    #fee: CostDto;
    #remark: string;

    constructor(id: string, startsOn: DateTime, endsOn: DateTime, fee: CostDto, remark: string) {
        this.#id = id;
        this.#startsOn = startsOn;
        this.#endsOn = endsOn;
        this.#fee = fee;
        this.#remark = remark;
    }
}
