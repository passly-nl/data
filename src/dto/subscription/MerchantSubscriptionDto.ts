import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto } from '#data/dto';
import type { SubscriptionType } from '#data/types';

@dto
export class MerchantSubscriptionDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get type(): SubscriptionType {
        return this.#type;
    }

    set type(value: SubscriptionType) {
        this.#type = value;
    }

    get planKey(): string {
        return this.#planKey;
    }

    set planKey(value: string) {
        this.#planKey = value;
    }

    get priceMonthly(): CostDto {
        return this.#priceMonthly;
    }

    set priceMonthly(value: CostDto) {
        this.#priceMonthly = value;
    }

    get startsOn(): DateTime {
        return this.#startsOn;
    }

    set startsOn(value: DateTime) {
        this.#startsOn = value;
    }

    get endsOn(): DateTime | null {
        return this.#endsOn;
    }

    set endsOn(value: DateTime | null) {
        this.#endsOn = value;
    }

    get cancelledOn(): DateTime | null {
        return this.#cancelledOn;
    }

    set cancelledOn(value: DateTime | null) {
        this.#cancelledOn = value;
    }

    get note(): string | null {
        return this.#note;
    }

    set note(value: string | null) {
        this.#note = value;
    }

    #id: string;
    #type: SubscriptionType;
    #planKey: string;
    #priceMonthly: CostDto;
    #startsOn: DateTime;
    #endsOn: DateTime | null;
    #cancelledOn: DateTime | null;
    #note: string | null;

    constructor(id: string, type: SubscriptionType, planKey: string, priceMonthly: CostDto, startsOn: DateTime, endsOn: DateTime | null, cancelledOn: DateTime | null, note: string | null) {
        this.#id = id;
        this.#type = type;
        this.#planKey = planKey;
        this.#priceMonthly = priceMonthly;
        this.#startsOn = startsOn;
        this.#endsOn = endsOn;
        this.#cancelledOn = cancelledOn;
        this.#note = note;
    }
}
