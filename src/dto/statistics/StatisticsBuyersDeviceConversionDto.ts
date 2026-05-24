import { dto } from '@basmilius/http-client';

@dto
export class StatisticsBuyersDeviceConversionDto {
    get operatingSystem(): string {
        return this.#operatingSystem;
    }

    set operatingSystem(value: string) {
        this.#operatingSystem = value;
    }

    get visits(): number {
        return this.#visits;
    }

    set visits(value: number) {
        this.#visits = value;
    }

    get orders(): number {
        return this.#orders;
    }

    set orders(value: number) {
        this.#orders = value;
    }

    get conversionRate(): number {
        return this.#conversionRate;
    }

    set conversionRate(value: number) {
        this.#conversionRate = value;
    }

    #operatingSystem: string;
    #visits: number;
    #orders: number;
    #conversionRate: number;

    constructor(operatingSystem: string, visits: number, orders: number, conversionRate: number) {
        this.#operatingSystem = operatingSystem;
        this.#visits = visits;
        this.#orders = orders;
        this.#conversionRate = conversionRate;
    }
}
