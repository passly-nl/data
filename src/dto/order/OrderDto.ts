import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { BuyerDto, CostDto, EventDto, MarketingAttributionDto, OrderLineDto, OrderPaymentProviderDto, PublicShopDto, TransactionDto } from '#data/dto';
import type { OrderOrigin, OrderType } from '#data/types';

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

    get discountAmount(): CostDto | null {
        return this.#discountAmount;
    }

    set discountAmount(value: CostDto | null) {
        this.#discountAmount = value;
    }

    get discountCodeApplied(): string | null {
        return this.#discountCodeApplied;
    }

    set discountCodeApplied(value: string | null) {
        this.#discountCodeApplied = value;
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

    get refundedTotal(): CostDto {
        return this.#refundedTotal;
    }

    set refundedTotal(value: CostDto) {
        this.#refundedTotal = value;
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

    get attribution(): MarketingAttributionDto | null {
        return this.#attribution;
    }

    set attribution(value: MarketingAttributionDto | null) {
        this.#attribution = value;
    }

    #id: string;
    #code: string;
    #origin: OrderOrigin;
    #type: OrderType;
    #createdOn: DateTime;
    #discountAmount: CostDto | null;
    #discountCodeApplied: string | null;
    #paymentProvider: OrderPaymentProviderDto | null;
    #platformCost: CostDto;
    #refundedTotal: CostDto;
    #subTotal: CostDto;
    #total: CostDto;
    #url: string;
    #buyer: BuyerDto | null;
    #event: EventDto | null;
    #lines: OrderLineDto[] | null;
    #shop: PublicShopDto | null;
    #transaction: TransactionDto | null;
    #attribution: MarketingAttributionDto | null;

    constructor(id: string, code: string, origin: OrderOrigin, type: OrderType, createdOn: DateTime, discountAmount: CostDto | null, discountCodeApplied: string | null, paymentProvider: OrderPaymentProviderDto | null, platformCost: CostDto, refundedTotal: CostDto, subTotal: CostDto, total: CostDto, url: string, buyer: BuyerDto | null, event: EventDto | null, lines: OrderLineDto[] | null, shop: PublicShopDto | null, transaction: TransactionDto | null, attribution: MarketingAttributionDto | null) {
        this.#id = id;
        this.#code = code;
        this.#origin = origin;
        this.#type = type;
        this.#createdOn = createdOn;
        this.#discountAmount = discountAmount;
        this.#discountCodeApplied = discountCodeApplied;
        this.#paymentProvider = paymentProvider;
        this.#platformCost = platformCost;
        this.#refundedTotal = refundedTotal;
        this.#subTotal = subTotal;
        this.#total = total;
        this.#url = url;
        this.#buyer = buyer;
        this.#event = event;
        this.#lines = lines;
        this.#shop = shop;
        this.#transaction = transaction;
        this.#attribution = attribution;
    }
}
