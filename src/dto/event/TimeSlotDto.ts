import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class TimeSlotDto {
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

    get productCount(): number {
        return this.#productCount;
    }

    set productCount(value: number) {
        this.#productCount = value;
    }

    #id: string;
    #label: string | null;
    #fromTime: DateTime;
    #toTime: DateTime;
    #productCount: number;

    constructor(id: string, label: string | null, fromTime: DateTime, toTime: DateTime, productCount: number) {
        this.#id = id;
        this.#label = label;
        this.#fromTime = fromTime;
        this.#toTime = toTime;
        this.#productCount = productCount;
    }
}
