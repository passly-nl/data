import { dto } from '@basmilius/http-client';
import type { CostDto, StatisticsOverviewKPIsTotalEventsHostedDto, StatisticsOverviewKPIsTotalRevenueDto, StatisticsOverviewKPIsTotalTicketsSoldDto } from '#data/dto';

@dto
export class StatisticsOverviewKPIsDto {
    get totalRevenue(): StatisticsOverviewKPIsTotalRevenueDto {
        return this.#totalRevenue;
    }

    set totalRevenue(value: StatisticsOverviewKPIsTotalRevenueDto) {
        this.#totalRevenue = value;
    }

    get totalTicketsSold(): StatisticsOverviewKPIsTotalTicketsSoldDto {
        return this.#totalTicketsSold;
    }

    set totalTicketsSold(value: StatisticsOverviewKPIsTotalTicketsSoldDto) {
        this.#totalTicketsSold = value;
    }

    get totalEventsHosted(): StatisticsOverviewKPIsTotalEventsHostedDto {
        return this.#totalEventsHosted;
    }

    set totalEventsHosted(value: StatisticsOverviewKPIsTotalEventsHostedDto) {
        this.#totalEventsHosted = value;
    }

    get totalCustomers(): number {
        return this.#totalCustomers;
    }

    set totalCustomers(value: number) {
        this.#totalCustomers = value;
    }

    get averageOrderValue(): CostDto {
        return this.#averageOrderValue;
    }

    set averageOrderValue(value: CostDto) {
        this.#averageOrderValue = value;
    }

    get averageAttendanceRate(): number {
        return this.#averageAttendanceRate;
    }

    set averageAttendanceRate(value: number) {
        this.#averageAttendanceRate = value;
    }

    #totalRevenue: StatisticsOverviewKPIsTotalRevenueDto;
    #totalTicketsSold: StatisticsOverviewKPIsTotalTicketsSoldDto;
    #totalEventsHosted: StatisticsOverviewKPIsTotalEventsHostedDto;
    #totalCustomers: number;
    #averageOrderValue: CostDto;
    #averageAttendanceRate: number;

    constructor(totalRevenue: StatisticsOverviewKPIsTotalRevenueDto, totalTicketsSold: StatisticsOverviewKPIsTotalTicketsSoldDto, totalEventsHosted: StatisticsOverviewKPIsTotalEventsHostedDto, totalCustomers: number, averageOrderValue: CostDto, averageAttendanceRate: number) {
        this.#totalRevenue = totalRevenue;
        this.#totalTicketsSold = totalTicketsSold;
        this.#totalEventsHosted = totalEventsHosted;
        this.#totalCustomers = totalCustomers;
        this.#averageOrderValue = averageOrderValue;
        this.#averageAttendanceRate = averageAttendanceRate;
    }
}

