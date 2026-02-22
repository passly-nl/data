import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { PictureDto } from '#data/dto';
import type { EventStatus } from '#data/types';

@dto
export class MerchantDashboardUpcomingEventDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get description(): string {
        return this.#description;
    }

    set description(value: string) {
        this.#description = value;
    }

    get headerFile(): PictureDto | null {
        return this.#headerFile;
    }

    set headerFile(value: PictureDto | null) {
        this.#headerFile = value;
    }

    get status(): EventStatus {
        return this.#status;
    }

    set status(value: EventStatus) {
        this.#status = value;
    }

    get startsOn(): DateTime {
        return this.#startsOn;
    }

    set startsOn(value: DateTime) {
        this.#startsOn = value;
    }

    get ticketsSold(): number {
        return this.#ticketsSold;
    }

    set ticketsSold(value: number) {
        this.#ticketsSold = value;
    }

    get ticketsTotal(): number {
        return this.#ticketsTotal;
    }

    set ticketsTotal(value: number) {
        this.#ticketsTotal = value;
    }

    get sellThroughRate(): number {
        return this.#sellThroughRate;
    }

    set sellThroughRate(value: number) {
        this.#sellThroughRate = value;
    }

    #id: string;
    #name: string;
    #description: string;
    #headerFile: PictureDto | null;
    #status: EventStatus;
    #startsOn: DateTime;
    #ticketsSold: number;
    #ticketsTotal: number;
    #sellThroughRate: number;

    constructor(id: string, name: string, description: string, headerFile: PictureDto | null, status: EventStatus, startsOn: DateTime, ticketsSold: number, ticketsTotal: number, sellThroughRate: number) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#headerFile = headerFile;
        this.#status = status;
        this.#startsOn = startsOn;
        this.#ticketsSold = ticketsSold;
        this.#ticketsTotal = ticketsTotal;
        this.#sellThroughRate = sellThroughRate;
    }
}
