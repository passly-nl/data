import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsSalesDiscountEfficacyDto {
    get ordersWithDiscount(): number {
        return this.#ordersWithDiscount;
    }

    set ordersWithDiscount(value: number) {
        this.#ordersWithDiscount = value;
    }

    get ordersWithoutDiscount(): number {
        return this.#ordersWithoutDiscount;
    }

    set ordersWithoutDiscount(value: number) {
        this.#ordersWithoutDiscount = value;
    }

    get discountUsageRate(): number {
        return this.#discountUsageRate;
    }

    set discountUsageRate(value: number) {
        this.#discountUsageRate = value;
    }

    get revenueWithDiscount(): CostDto {
        return this.#revenueWithDiscount;
    }

    set revenueWithDiscount(value: CostDto) {
        this.#revenueWithDiscount = value;
    }

    get revenueWithoutDiscount(): CostDto {
        return this.#revenueWithoutDiscount;
    }

    set revenueWithoutDiscount(value: CostDto) {
        this.#revenueWithoutDiscount = value;
    }

    get totalDiscountAmount(): CostDto {
        return this.#totalDiscountAmount;
    }

    set totalDiscountAmount(value: CostDto) {
        this.#totalDiscountAmount = value;
    }

    get averageDiscountPerOrder(): CostDto {
        return this.#averageDiscountPerOrder;
    }

    set averageDiscountPerOrder(value: CostDto) {
        this.#averageDiscountPerOrder = value;
    }

    get averageOrderValueWithDiscount(): CostDto {
        return this.#averageOrderValueWithDiscount;
    }

    set averageOrderValueWithDiscount(value: CostDto) {
        this.#averageOrderValueWithDiscount = value;
    }

    get averageOrderValueWithoutDiscount(): CostDto {
        return this.#averageOrderValueWithoutDiscount;
    }

    set averageOrderValueWithoutDiscount(value: CostDto) {
        this.#averageOrderValueWithoutDiscount = value;
    }

    #ordersWithDiscount: number;
    #ordersWithoutDiscount: number;
    #discountUsageRate: number;
    #revenueWithDiscount: CostDto;
    #revenueWithoutDiscount: CostDto;
    #totalDiscountAmount: CostDto;
    #averageDiscountPerOrder: CostDto;
    #averageOrderValueWithDiscount: CostDto;
    #averageOrderValueWithoutDiscount: CostDto;

    constructor(ordersWithDiscount: number, ordersWithoutDiscount: number, discountUsageRate: number, revenueWithDiscount: CostDto, revenueWithoutDiscount: CostDto, totalDiscountAmount: CostDto, averageDiscountPerOrder: CostDto, averageOrderValueWithDiscount: CostDto, averageOrderValueWithoutDiscount: CostDto) {
        this.#ordersWithDiscount = ordersWithDiscount;
        this.#ordersWithoutDiscount = ordersWithoutDiscount;
        this.#discountUsageRate = discountUsageRate;
        this.#revenueWithDiscount = revenueWithDiscount;
        this.#revenueWithoutDiscount = revenueWithoutDiscount;
        this.#totalDiscountAmount = totalDiscountAmount;
        this.#averageDiscountPerOrder = averageDiscountPerOrder;
        this.#averageOrderValueWithDiscount = averageOrderValueWithDiscount;
        this.#averageOrderValueWithoutDiscount = averageOrderValueWithoutDiscount;
    }
}
