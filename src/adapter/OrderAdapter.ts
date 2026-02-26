import { adapter, ForeignData } from '@basmilius/http-client';
import { BuyerAdapter, DateTimeAdapter, EventAdapter, PaymentAdapter, PublicShopAdapter } from '#data/adapter';
import { OrderDto, OrderLineDto, OrderPaymentProviderDto, OrderProductDto } from '#data/dto';
import { optional, optionalArray } from '#data/util';

@adapter
export class OrderAdapter {
    static parseOrder(data: ForeignData): OrderDto {
        return new OrderDto(
            data.id,
            data.code,
            data.origin,
            data.type,
            DateTimeAdapter.parseDateTime(data.created_on),
            optional(data.payment_provider, OrderAdapter.parseOrderPaymentProvider),
            optional(data.platform_cost, PaymentAdapter.parseCost)!,
            optional(data.sub_total, PaymentAdapter.parseCost)!,
            optional(data.total, PaymentAdapter.parseCost)!,
            data.url,
            optional(data.buyer, BuyerAdapter.parseBuyer),
            optional(data.event, EventAdapter.parseEvent),
            optionalArray(data.lines, OrderAdapter.parseOrderLine),
            optional(data.shop, PublicShopAdapter.parsePublicShop),
            optional(data.transaction, PaymentAdapter.parseTransaction)
        );
    }

    static parseOrderLine(data: ForeignData): OrderLineDto {
        return new OrderLineDto(
            data.id,
            PaymentAdapter.parseCost(data.price),
            data.quantity,
            OrderAdapter.parseOrderProduct(data.product),
            PaymentAdapter.parseCost(data.sub_total),
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }

    static parseOrderPaymentProvider(data: ForeignData): OrderPaymentProviderDto {
        return new OrderPaymentProviderDto(
            data.name,
            data.url
        );
    }

    static parseOrderProduct(data: ForeignData): OrderProductDto {
        return new OrderProductDto(
            data.id,
            data.name,
            data.description,
            data.image
        );
    }
}
