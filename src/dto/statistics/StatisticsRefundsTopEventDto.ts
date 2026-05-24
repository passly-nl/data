import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsRefundsTopEventDto {
    get eventId(): string {
        return this.#eventId;
    }

    set eventId(value: string) {
        this.#eventId = value;
    }

    get eventName(): string {
        return this.#eventName;
    }

    set eventName(value: string) {
        this.#eventName = value;
    }

    get eventStartsOn(): DateTime {
        return this.#eventStartsOn;
    }

    set eventStartsOn(value: DateTime) {
        this.#eventStartsOn = value;
    }

    get refundCount(): number {
        return this.#refundCount;
    }

    set refundCount(value: number) {
        this.#refundCount = value;
    }

    get refundAmount(): CostDto {
        return this.#refundAmount;
    }

    set refundAmount(value: CostDto) {
        this.#refundAmount = value;
    }

    get refundRate(): number {
        return this.#refundRate;
    }

    set refundRate(value: number) {
        this.#refundRate = value;
    }

    #eventId: string;
    #eventName: string;
    #eventStartsOn: DateTime;
    #refundCount: number;
    #refundAmount: CostDto;
    #refundRate: number;

    constructor(eventId: string, eventName: string, eventStartsOn: DateTime, refundCount: number, refundAmount: CostDto, refundRate: number) {
        this.#eventId = eventId;
        this.#eventName = eventName;
        this.#eventStartsOn = eventStartsOn;
        this.#refundCount = refundCount;
        this.#refundAmount = refundAmount;
        this.#refundRate = refundRate;
    }
}
