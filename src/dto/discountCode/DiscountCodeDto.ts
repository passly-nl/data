import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto } from '#data/dto';
import type { DiscountCodeEvent, DiscountCodeType } from '#data/types';

@dto
export class DiscountCodeDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get code(): string {
        return this.#code;
    }

    set code(value: string) {
        this.#code = value;
    }

    get type(): DiscountCodeType {
        return this.#type;
    }

    set type(value: DiscountCodeType) {
        this.#type = value;
    }

    get percentage(): number | null {
        return this.#percentage;
    }

    set percentage(value: number | null) {
        this.#percentage = value;
    }

    get amount(): CostDto | null {
        return this.#amount;
    }

    set amount(value: CostDto | null) {
        this.#amount = value;
    }

    get maxUses(): number | null {
        return this.#maxUses;
    }

    set maxUses(value: number | null) {
        this.#maxUses = value;
    }

    get validFrom(): DateTime {
        return this.#validFrom;
    }

    set validFrom(value: DateTime) {
        this.#validFrom = value;
    }

    get validUntil(): DateTime {
        return this.#validUntil;
    }

    set validUntil(value: DateTime) {
        this.#validUntil = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get usesCount(): number {
        return this.#usesCount;
    }

    set usesCount(value: number) {
        this.#usesCount = value;
    }

    get remainingUses(): number | null {
        return this.#remainingUses;
    }

    set remainingUses(value: number | null) {
        this.#remainingUses = value;
    }

    get isCurrentlyValid(): boolean {
        return this.#isCurrentlyValid;
    }

    set isCurrentlyValid(value: boolean) {
        this.#isCurrentlyValid = value;
    }

    get event(): DiscountCodeEvent | null {
        return this.#event;
    }

    set event(value: DiscountCodeEvent | null) {
        this.#event = value;
    }

    #id: string;
    #code: string;
    #type: DiscountCodeType;
    #percentage: number | null;
    #amount: CostDto | null;
    #maxUses: number | null;
    #validFrom: DateTime;
    #validUntil: DateTime;
    #createdOn: DateTime;
    #usesCount: number;
    #remainingUses: number | null;
    #isCurrentlyValid: boolean;
    #event: DiscountCodeEvent | null;

    constructor(id: string, code: string, type: DiscountCodeType, percentage: number | null, amount: CostDto | null, maxUses: number | null, validFrom: DateTime, validUntil: DateTime, createdOn: DateTime, usesCount: number, remainingUses: number | null, isCurrentlyValid: boolean, event: DiscountCodeEvent | null) {
        this.#id = id;
        this.#code = code;
        this.#type = type;
        this.#percentage = percentage;
        this.#amount = amount;
        this.#maxUses = maxUses;
        this.#validFrom = validFrom;
        this.#validUntil = validUntil;
        this.#createdOn = createdOn;
        this.#usesCount = usesCount;
        this.#remainingUses = remainingUses;
        this.#isCurrentlyValid = isCurrentlyValid;
        this.#event = event;
    }
}
