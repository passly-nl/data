import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class PublicShopTimeSlotDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get label(): string | null {
        return this.#label;
    }

    set label(value: string | null) {
        this.#label = value;
    }

    get fromTime(): DateTime {
        return this.#fromTime;
    }

    set fromTime(value: DateTime) {
        this.#fromTime = value;
    }

    get toTime(): DateTime {
        return this.#toTime;
    }

    set toTime(value: DateTime) {
        this.#toTime = value;
    }

    get maxQuantity(): number {
        return this.#maxQuantity;
    }

    set maxQuantity(value: number) {
        this.#maxQuantity = value;
    }

    #id: string;
    #label: string | null;
    #fromTime: DateTime;
    #toTime: DateTime;
    #maxQuantity: number;

    constructor(id: string, label: string | null, fromTime: DateTime, toTime: DateTime, maxQuantity: number) {
        this.#id = id;
        this.#label = label;
        this.#fromTime = fromTime;
        this.#toTime = toTime;
        this.#maxQuantity = maxQuantity;
    }
}
