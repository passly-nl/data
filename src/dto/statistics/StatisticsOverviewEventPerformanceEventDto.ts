import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto, PictureDto } from '#data/dto';
import type { EventStatisticsStatus } from '#data/types';

@dto
export class StatisticsOverviewEventPerformanceEventDto {
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

    get startsOn(): DateTime {
        return this.#startsOn;
    }

    set startsOn(value: DateTime) {
        this.#startsOn = value;
    }

    get endsOn(): DateTime {
        return this.#endsOn;
    }

    set endsOn(value: DateTime) {
        this.#endsOn = value;
    }

    get headerFile(): PictureDto | null {
        return this.#headerFile;
    }

    set headerFile(value: PictureDto | null) {
        this.#headerFile = value;
    }

    get status(): EventStatisticsStatus {
        return this.#status;
    }

    set status(value: EventStatisticsStatus) {
        this.#status = value;
    }

    get revenue(): CostDto {
        return this.#revenue;
    }

    set revenue(value: CostDto) {
        this.#revenue = value;
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

    get attendanceRate(): number {
        return this.#attendanceRate;
    }

    set attendanceRate(value: number) {
        this.#attendanceRate = value;
    }

    get attendedCount(): number {
        return this.#attendedCount;
    }

    set attendedCount(value: number) {
        this.#attendedCount = value;
    }

    get ordersCount(): number {
        return this.#ordersCount;
    }

    set ordersCount(value: number) {
        this.#ordersCount = value;
    }

    #id: string;
    #name: string;
    #startsOn: DateTime;
    #endsOn: DateTime;
    #headerFile: PictureDto | null;
    #status: EventStatisticsStatus;
    #revenue: CostDto;
    #ticketsSold: number;
    #ticketsTotal: number;
    #sellThroughRate: number;
    #attendanceRate: number;
    #attendedCount: number;
    #ordersCount: number;

    constructor(id: string, name: string, startsOn: DateTime, endsOn: DateTime, headerFile: PictureDto | null, status: EventStatisticsStatus, revenue: CostDto, ticketsSold: number, ticketsTotal: number, sellThroughRate: number, attendanceRate: number, attendedCount: number, ordersCount: number) {
        this.#id = id;
        this.#name = name;
        this.#startsOn = startsOn;
        this.#endsOn = endsOn;
        this.#headerFile = headerFile;
        this.#status = status;
        this.#revenue = revenue;
        this.#ticketsSold = ticketsSold;
        this.#ticketsTotal = ticketsTotal;
        this.#sellThroughRate = sellThroughRate;
        this.#attendanceRate = attendanceRate;
        this.#attendedCount = attendedCount;
        this.#ordersCount = ordersCount;
    }
}
