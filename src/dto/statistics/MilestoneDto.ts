import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { MilestoneType } from '#data/types';

@dto
export class MilestoneDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get type(): MilestoneType {
        return this.#type;
    }

    set type(value: MilestoneType) {
        this.#type = value;
    }

    get threshold(): number | null {
        return this.#threshold;
    }

    set threshold(value: number | null) {
        this.#threshold = value;
    }

    get value(): number | null {
        return this.#value;
    }

    set value(value: number | null) {
        this.#value = value;
    }

    get referenceClass(): string | null {
        return this.#referenceClass;
    }

    set referenceClass(value: string | null) {
        this.#referenceClass = value;
    }

    get referenceId(): string | null {
        return this.#referenceId;
    }

    set referenceId(value: string | null) {
        this.#referenceId = value;
    }

    get achievedOn(): DateTime {
        return this.#achievedOn;
    }

    set achievedOn(value: DateTime) {
        this.#achievedOn = value;
    }

    #id: string;
    #type: MilestoneType;
    #threshold: number | null;
    #value: number | null;
    #referenceClass: string | null;
    #referenceId: string | null;
    #achievedOn: DateTime;

    constructor(id: string, type: MilestoneType, threshold: number | null, value: number | null, referenceClass: string | null, referenceId: string | null, achievedOn: DateTime) {
        this.#id = id;
        this.#type = type;
        this.#threshold = threshold;
        this.#value = value;
        this.#referenceClass = referenceClass;
        this.#referenceId = referenceId;
        this.#achievedOn = achievedOn;
    }
}
