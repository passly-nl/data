import { dto } from '@basmilius/http-client';
import type { CostDto } from '../../dto';

@dto
export class StatisticsOverviewEventPerformanceSummaryDto {
    get totalRevenue(): CostDto {
        return this.#totalRevenue;
    }

    set totalRevenue(value: CostDto) {
        this.#totalRevenue = value;
    }

    get totalTicketsSold(): number {
        return this.#totalTicketsSold;
    }

    set totalTicketsSold(value: number) {
        this.#totalTicketsSold = value;
    }

    get totalTicketsCapacity(): number {
        return this.#totalTicketsCapacity;
    }

    set totalTicketsCapacity(value: number) {
        this.#totalTicketsCapacity = value;
    }

    get averageSellThroughRate(): number {
        return this.#averageSellThroughRate;
    }

    set averageSellThroughRate(value: number) {
        this.#averageSellThroughRate = value;
    }

    get averageAttendanceRate(): number {
        return this.#averageAttendanceRate;
    }

    set averageAttendanceRate(value: number) {
        this.#averageAttendanceRate = value;
    }

    #totalRevenue: CostDto;
    #totalTicketsSold: number;
    #totalTicketsCapacity: number;
    #averageSellThroughRate: number;
    #averageAttendanceRate: number;

    constructor(totalRevenue: CostDto, totalTicketsSold: number, totalTicketsCapacity: number, averageSellThroughRate: number, averageAttendanceRate: number) {
        this.#totalRevenue = totalRevenue;
        this.#totalTicketsSold = totalTicketsSold;
        this.#totalTicketsCapacity = totalTicketsCapacity;
        this.#averageSellThroughRate = averageSellThroughRate;
        this.#averageAttendanceRate = averageAttendanceRate;
    }
}
