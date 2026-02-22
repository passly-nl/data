import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto } from '../../dto';
import type { InvoiceLineType } from '../../types';

@dto
export class InvoiceLineDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get type(): InvoiceLineType {
        return this.#type;
    }

    set type(value: InvoiceLineType) {
        this.#type = value;
    }

    get cost(): CostDto {
        return this.#cost;
    }

    set cost(value: CostDto) {
        this.#cost = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get updatedOn(): DateTime {
        return this.#updatedOn;
    }

    set updatedOn(value: DateTime) {
        this.#updatedOn = value;
    }

    #id: string;
    #type: InvoiceLineType;
    #cost: CostDto;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, type: InvoiceLineType, cost: CostDto, createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#type = type;
        this.#cost = cost;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
