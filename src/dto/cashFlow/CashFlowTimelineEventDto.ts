import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto } from '#data/dto';
import type { CashFlowEventType } from '#data/types';

@dto
export class CashFlowTimelineEventDto {
    get at(): DateTime {
        return this.#at;
    }

    set at(value: DateTime) {
        this.#at = value;
    }

    get type(): CashFlowEventType {
        return this.#type;
    }

    set type(value: CashFlowEventType) {
        this.#type = value;
    }

    get amount(): CostDto | null {
        return this.#amount;
    }

    set amount(value: CostDto | null) {
        this.#amount = value;
    }

    get balance(): CostDto {
        return this.#balance;
    }

    set balance(value: CostDto) {
        this.#balance = value;
    }

    get description(): string {
        return this.#description;
    }

    set description(value: string) {
        this.#description = value;
    }

    get details(): Record<string, unknown> | null {
        return this.#details;
    }

    set details(value: Record<string, unknown> | null) {
        this.#details = value;
    }

    #at: DateTime;
    #type: CashFlowEventType;
    #amount: CostDto | null;
    #balance: CostDto;
    #description: string;
    #details: Record<string, unknown> | null;

    constructor(at: DateTime, type: CashFlowEventType, amount: CostDto | null, balance: CostDto, description: string, details: Record<string, unknown> | null) {
        this.#at = at;
        this.#type = type;
        this.#amount = amount;
        this.#balance = balance;
        this.#description = description;
        this.#details = details;
    }
}
