import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { BuyerDto, EventDto, OrderDto, ProductDto } from '#data/dto';
import type { ScanStatus, TicketValidity } from '#data/types';

@dto
export class TicketDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get sequence(): number {
        return this.#sequence;
    }

    set sequence(value: number) {
        this.#sequence = value;
    }

    get code(): string {
        return this.#code;
    }

    set code(value: string) {
        this.#code = value;
    }

    get status(): ScanStatus {
        return this.#status;
    }

    set status(value: ScanStatus) {
        this.#status = value;
    }

    get validity(): TicketValidity {
        return this.#validity;
    }

    set validity(value: TicketValidity) {
        this.#validity = value;
    }

    get isRefundable(): boolean {
        return this.#isRefundable;
    }

    set isRefundable(value: boolean) {
        this.#isRefundable = value;
    }

    get buyer(): BuyerDto {
        return this.#buyer;
    }

    set buyer(value: BuyerDto) {
        this.#buyer = value;
    }

    get event(): EventDto {
        return this.#event;
    }

    set event(value: EventDto) {
        this.#event = value;
    }

    get holder(): BuyerDto | null {
        return this.#holder;
    }

    set holder(value: BuyerDto | null) {
        this.#holder = value;
    }

    get order(): OrderDto {
        return this.#order;
    }

    set order(value: OrderDto) {
        this.#order = value;
    }

    get product(): ProductDto {
        return this.#product;
    }

    set product(value: ProductDto) {
        this.#product = value;
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
    #sequence: number;
    #code: string;
    #status: ScanStatus;
    #validity: TicketValidity;
    #isRefundable: boolean;
    #buyer: BuyerDto;
    #event: EventDto;
    #holder: BuyerDto | null;
    #order: OrderDto;
    #product: ProductDto;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, sequence: number, code: string, status: ScanStatus, validity: TicketValidity, isRefundable: boolean, buyer: BuyerDto, event: EventDto, holder: BuyerDto | null, order: OrderDto, product: ProductDto, createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#sequence = sequence;
        this.#code = code;
        this.#status = status;
        this.#validity = validity;
        this.#isRefundable = isRefundable;
        this.#buyer = buyer;
        this.#event = event;
        this.#holder = holder;
        this.#order = order;
        this.#product = product;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
