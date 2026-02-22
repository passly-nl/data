import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { BuyerDto, CostDto, EventDto, OrderLineDto, OrderPaymentProviderDto, PublicShopDto, TransactionDto } from '../../dto';
import type { OrderOrigin, OrderType } from '../../types';

@dto
export class OrderDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get code(): string {
        return this.#code;
    }

    set code(value: string) {
        this.#code = value;
    }

    get origin(): OrderOrigin {
        return this.#origin;
    }

    set origin(value: OrderOrigin) {
        this.#origin = value;
    }

    get type(): OrderType {
        return this.#type;
    }

    set type(value: OrderType) {
        this.#type = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get paymentProvider(): OrderPaymentProviderDto | null {
        return this.#paymentProvider;
    }

    set paymentProvider(value: OrderPaymentProviderDto | null) {
        this.#paymentProvider = value;
    }

    get platformCost(): CostDto {
        return this.#platformCost;
    }

    set platformCost(value: CostDto) {
        this.#platformCost = value;
    }

    get subTotal(): CostDto {
        return this.#subTotal;
    }

    set subTotal(value: CostDto) {
        this.#subTotal = value;
    }

    get total(): CostDto {
        return this.#total;
    }

    set total(value: CostDto) {
        this.#total = value;
    }

    get url(): string {
        return this.#url;
    }

    set url(value: string) {
        this.#url = value;
    }

    get buyer(): BuyerDto | null {
        return this.#buyer;
    }

    set buyer(value: BuyerDto | null) {
        this.#buyer = value;
    }

    get event(): EventDto | null {
        return this.#event;
    }

    set event(value: EventDto | null) {
        this.#event = value;
    }

    get lines(): OrderLineDto[] | null {
        return this.#lines;
    }

    set lines(value: OrderLineDto[] | null) {
        this.#lines = value;
    }

    get shop(): PublicShopDto | null {
        return this.#shop;
    }

    set shop(value: PublicShopDto | null) {
        this.#shop = value;
    }

    get transaction(): TransactionDto | null {
        return this.#transaction;
    }

    set transaction(value: TransactionDto | null) {
        this.#transaction = value;
    }

    #id: string;
    #code: string;
    #origin: OrderOrigin;
    #type: OrderType;
    #createdOn: DateTime;
    #paymentProvider: OrderPaymentProviderDto | null;
    #platformCost: CostDto;
    #subTotal: CostDto;
    #total: CostDto;
    #url: string;
    #buyer: BuyerDto | null;
    #event: EventDto | null;
    #lines: OrderLineDto[] | null;
    #shop: PublicShopDto | null;
    #transaction: TransactionDto | null;

    constructor(id: string, code: string, origin: OrderOrigin, type: OrderType, createdOn: DateTime, paymentProvider: OrderPaymentProviderDto | null, platformCost: CostDto, subTotal: CostDto, total: CostDto, url: string, buyer: BuyerDto | null, event: EventDto | null, lines: OrderLineDto[] | null, shop: PublicShopDto | null, transaction: TransactionDto | null) {
        this.#id = id;
        this.#code = code;
        this.#origin = origin;
        this.#type = type;
        this.#createdOn = createdOn;
        this.#paymentProvider = paymentProvider;
        this.#platformCost = platformCost;
        this.#subTotal = subTotal;
        this.#total = total;
        this.#url = url;
        this.#buyer = buyer;
        this.#event = event;
        this.#lines = lines;
        this.#shop = shop;
        this.#transaction = transaction;
    }
}
