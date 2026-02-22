import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto, OrderProductDto } from '../../dto';

@dto
export class OrderLineDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get price(): CostDto {
        return this.#price;
    }

    set price(value: CostDto) {
        this.#price = value;
    }

    get quantity(): number {
        return this.#quantity;
    }

    set quantity(value: number) {
        this.#quantity = value;
    }

    get product(): OrderProductDto {
        return this.#product;
    }

    set product(value: OrderProductDto) {
        this.#product = value;
    }

    get subTotal(): CostDto {
        return this.#subTotal;
    }

    set subTotal(value: CostDto) {
        this.#subTotal = value;
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
    #price: CostDto;
    #quantity: number;
    #product: OrderProductDto;
    #subTotal: CostDto;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, price: CostDto, quantity: number, product: OrderProductDto, subTotal: CostDto, createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#price = price;
        this.#quantity = quantity;
        this.#product = product;
        this.#subTotal = subTotal;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
