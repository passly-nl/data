import { dto } from '@basmilius/http-client';

@dto
export class StatisticsMarketingSourceFunnelDto {
    get source(): string {
        return this.#source;
    }

    set source(value: string) {
        this.#source = value;
    }

    get reservations(): number {
        return this.#reservations;
    }

    set reservations(value: number) {
        this.#reservations = value;
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

    #source: string;
    #reservations: number;
    #orders: number;
    #conversionRate: number;

    constructor(source: string, reservations: number, orders: number, conversionRate: number) {
        this.#source = source;
        this.#reservations = reservations;
        this.#orders = orders;
        this.#conversionRate = conversionRate;
    }
}
