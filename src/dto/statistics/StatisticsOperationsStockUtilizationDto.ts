import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsOperationsStockUtilizationDto {
    get productId(): string {
        return this.#productId;
    }

    set productId(value: string) {
        this.#productId = value;
    }

    get productName(): string {
        return this.#productName;
    }

    set productName(value: string) {
        this.#productName = value;
    }

    get productPrice(): CostDto {
        return this.#productPrice;
    }

    set productPrice(value: CostDto) {
        this.#productPrice = value;
    }

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

    get stock(): number {
        return this.#stock;
    }

    set stock(value: number) {
        this.#stock = value;
    }

    get sold(): number {
        return this.#sold;
    }

    set sold(value: number) {
        this.#sold = value;
    }

    get utilizationRate(): number {
        return this.#utilizationRate;
    }

    set utilizationRate(value: number) {
        this.#utilizationRate = value;
    }

    #productId: string;
    #productName: string;
    #productPrice: CostDto;
    #eventId: string;
    #eventName: string;
    #eventStartsOn: DateTime;
    #stock: number;
    #sold: number;
    #utilizationRate: number;

    constructor(productId: string, productName: string, productPrice: CostDto, eventId: string, eventName: string, eventStartsOn: DateTime, stock: number, sold: number, utilizationRate: number) {
        this.#productId = productId;
        this.#productName = productName;
        this.#productPrice = productPrice;
        this.#eventId = eventId;
        this.#eventName = eventName;
        this.#eventStartsOn = eventStartsOn;
        this.#stock = stock;
        this.#sold = sold;
        this.#utilizationRate = utilizationRate;
    }
}
