import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class StockPoolDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get eventId(): string {
        return this.#eventId;
    }

    set eventId(value: string) {
        this.#eventId = value;
    }

    get merchantId(): string {
        return this.#merchantId;
    }

    set merchantId(value: string) {
        this.#merchantId = value;
    }

    get name(): string | null {
        return this.#name;
    }

    set name(value: string | null) {
        this.#name = value;
    }

    get remainingStock(): number {
        return this.#remainingStock;
    }

    set remainingStock(value: number) {
        this.#remainingStock = value;
    }

    get stock(): number {
        return this.#stock;
    }

    set stock(value: number) {
        this.#stock = value;
    }

    get isShared(): boolean {
        return this.#isShared;
    }

    set isShared(value: boolean) {
        this.#isShared = value;
    }

    get productNames(): string[] {
        return this.#productNames;
    }

    set productNames(value: string[]) {
        this.#productNames = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get updatedOn(): DateTime {
        return this.#updatedOn;
    }

    set updatedOn(value: DateTime) {
        this.#updatedOn = value;
    }

    #id: string;
    #eventId: string;
    #merchantId: string;
    #name: string | null;
    #remainingStock: number;
    #stock: number;
    #isShared: boolean;
    #productNames: string[];
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, eventId: string, merchantId: string, name: string | null, remainingStock: number, stock: number, isShared: boolean, productNames: string[], createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#eventId = eventId;
        this.#merchantId = merchantId;
        this.#name = name;
        this.#remainingStock = remainingStock;
        this.#stock = stock;
        this.#isShared = isShared;
        this.#productNames = productNames;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
