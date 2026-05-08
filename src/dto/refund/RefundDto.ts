import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto } from '#data/dto';
import type { RefundReason, RefundStatus } from '#data/types';

@dto
export class RefundDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get status(): RefundStatus {
        return this.#status;
    }

    set status(value: RefundStatus) {
        this.#status = value;
    }

    get amount(): CostDto {
        return this.#amount;
    }

    set amount(value: CostDto) {
        this.#amount = value;
    }

    get reason(): RefundReason {
        return this.#reason;
    }

    set reason(value: RefundReason) {
        this.#reason = value;
    }

    get reasonLabel(): string {
        return this.#reasonLabel;
    }

    set reasonLabel(value: string) {
        this.#reasonLabel = value;
    }

    get note(): string | null {
        return this.#note;
    }

    set note(value: string | null) {
        this.#note = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get completedOn(): DateTime | null {
        return this.#completedOn;
    }

    set completedOn(value: DateTime | null) {
        this.#completedOn = value;
    }

    #id: string;
    #status: RefundStatus;
    #amount: CostDto;
    #reason: RefundReason;
    #reasonLabel: string;
    #note: string | null;
    #createdOn: DateTime;
    #completedOn: DateTime | null;

    constructor(id: string, status: RefundStatus, amount: CostDto, reason: RefundReason, reasonLabel: string, note: string | null, createdOn: DateTime, completedOn: DateTime | null) {
        this.#id = id;
        this.#status = status;
        this.#amount = amount;
        this.#reason = reason;
        this.#reasonLabel = reasonLabel;
        this.#note = note;
        this.#createdOn = createdOn;
        this.#completedOn = completedOn;
    }
}
