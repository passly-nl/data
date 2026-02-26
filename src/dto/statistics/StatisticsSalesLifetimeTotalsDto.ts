import { dto } from '@basmilius/http-client';
import { CostDto } from '../payment';

@dto
export class StatisticsSalesLifetimeTotalsDto {
    get totalRevenue(): CostDto {
        return this.#totalRevenue;
    }

    set totalRevenue(value: CostDto) {
        this.#totalRevenue = value;
    }

    get totalPlatformCost(): CostDto {
        return this.#totalPlatformCost;
    }

    set totalPlatformCost(value: CostDto) {
        this.#totalPlatformCost = value;
    }

    get netRevenue(): CostDto {
        return this.#netRevenue;
    }

    set netRevenue(value: CostDto) {
        this.#netRevenue = value;
    }

    get averageOrderValue(): CostDto {
        return this.#averageOrderValue;
    }

    set averageOrderValue(value: CostDto) {
        this.#averageOrderValue = value;
    }

    get averageRevenuePerTicket(): CostDto {
        return this.#averageRevenuePerTicket;
    }

    set averageRevenuePerTicket(value: CostDto) {
        this.#averageRevenuePerTicket = value;
    }

    #totalRevenue: CostDto;
    #totalPlatformCost: CostDto;
    #netRevenue: CostDto;
    #averageOrderValue: CostDto;
    #averageRevenuePerTicket: CostDto;

    constructor(totalRevenue: CostDto, totalPlatformCost: CostDto, netRevenue: CostDto, averageOrderValue: CostDto, averageRevenuePerTicket: CostDto) {
        this.#totalRevenue = totalRevenue;
        this.#totalPlatformCost = totalPlatformCost;
        this.#netRevenue = netRevenue;
        this.#averageOrderValue = averageOrderValue;
        this.#averageRevenuePerTicket = averageRevenuePerTicket;
    }
}
