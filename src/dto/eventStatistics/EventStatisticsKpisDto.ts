import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class EventStatisticsKpisDto {
    get revenue(): CostDto {
        return this.#revenue;
    }

    set revenue(value: CostDto) {
        this.#revenue = value;
    }

    get platformCost(): CostDto {
        return this.#platformCost;
    }

    set platformCost(value: CostDto) {
        this.#platformCost = value;
    }

    get netRevenue(): CostDto {
        return this.#netRevenue;
    }

    set netRevenue(value: CostDto) {
        this.#netRevenue = value;
    }

    get totalOrders(): number {
        return this.#totalOrders;
    }

    set totalOrders(value: number) {
        this.#totalOrders = value;
    }

    get totalTicketsSold(): number {
        return this.#totalTicketsSold;
    }

    set totalTicketsSold(value: number) {
        this.#totalTicketsSold = value;
    }

    get ticketsCapacity(): number {
        return this.#ticketsCapacity;
    }

    set ticketsCapacity(value: number) {
        this.#ticketsCapacity = value;
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

    get averageOrderValue(): CostDto {
        return this.#averageOrderValue;
    }

    set averageOrderValue(value: CostDto) {
        this.#averageOrderValue = value;
    }

    get averageTicketPrice(): CostDto {
        return this.#averageTicketPrice;
    }

    set averageTicketPrice(value: CostDto) {
        this.#averageTicketPrice = value;
    }

    get uniqueBuyers(): number {
        return this.#uniqueBuyers;
    }

    set uniqueBuyers(value: number) {
        this.#uniqueBuyers = value;
    }

    #revenue: CostDto;
    #platformCost: CostDto;
    #netRevenue: CostDto;
    #totalOrders: number;
    #totalTicketsSold: number;
    #ticketsCapacity: number;
    #sellThroughRate: number;
    #attendanceRate: number;
    #averageOrderValue: CostDto;
    #averageTicketPrice: CostDto;
    #uniqueBuyers: number;

    constructor(revenue: CostDto, platformCost: CostDto, netRevenue: CostDto, totalOrders: number, totalTicketsSold: number, ticketsCapacity: number, sellThroughRate: number, attendanceRate: number, averageOrderValue: CostDto, averageTicketPrice: CostDto, uniqueBuyers: number) {
        this.#revenue = revenue;
        this.#platformCost = platformCost;
        this.#netRevenue = netRevenue;
        this.#totalOrders = totalOrders;
        this.#totalTicketsSold = totalTicketsSold;
        this.#ticketsCapacity = ticketsCapacity;
        this.#sellThroughRate = sellThroughRate;
        this.#attendanceRate = attendanceRate;
        this.#averageOrderValue = averageOrderValue;
        this.#averageTicketPrice = averageTicketPrice;
        this.#uniqueBuyers = uniqueBuyers;
    }
}
