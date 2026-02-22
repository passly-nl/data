import { adapter } from '@basmilius/http-client';
import { BuyerAdapter, DateTimeAdapter, EventAdapter, PaymentAdapter, PublicShopAdapter } from '../adapter';
import { OrderDto, OrderLineDto, OrderPaymentProviderDto, OrderProductDto } from '../dto';
import { optional, optionalArray } from '../util';

@adapter
export class OrderAdapter {
    static parseOrderFromObject(order: Record<string, any>): OrderDto {
        return new OrderDto(
            order.id,
            order.code,
            order.origin,
            order.type,
            DateTimeAdapter.parseDateTimeFromString(order.created_on),
            optional(order.payment_provider, OrderAdapter.parseOrderPaymentProviderFromObject),
            optional(order.platform_cost, PaymentAdapter.parseCostFromObject)!,
            optional(order.sub_total, PaymentAdapter.parseCostFromObject)!,
            optional(order.total, PaymentAdapter.parseCostFromObject)!,
            order.url,
            optional(order.buyer, BuyerAdapter.parseBuyerFromObject),
            optional(order.event, EventAdapter.parseEventFromObject),
            optionalArray(order.lines, OrderAdapter.parseOrderLineFromObject),
            optional(order.shop, PublicShopAdapter.parsePublicShopFromObject),
            optional(order.transaction, PaymentAdapter.parseTransactionFromObject)
        );
    }

    static parseOrderLineFromObject(line: Record<string, any>): OrderLineDto {
        return new OrderLineDto(
            line.id,
            PaymentAdapter.parseCostFromObject(line.price),
            line.quantity,
            OrderAdapter.parseOrderProductFromObject(line.product),
            PaymentAdapter.parseCostFromObject(line.sub_total),
            DateTimeAdapter.parseDateTimeFromString(line.created_on),
            DateTimeAdapter.parseDateTimeFromString(line.updated_on)
        );
    }

    static parseOrderPaymentProviderFromObject(provider: Record<string, any>): OrderPaymentProviderDto {
        return new OrderPaymentProviderDto(
            provider.name,
            provider.url
        );
    }

    static parseOrderProductFromObject(product: Record<string, any>): OrderProductDto {
        return new OrderProductDto(
            product.id,
            product.name,
            product.description,
            product.image
        );
    }
}
