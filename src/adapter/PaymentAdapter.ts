import { adapter, ForeignData } from '@basmilius/http-client';
import { OrderAdapter } from '#data/adapter';
import { CostDto, PaymentMethodDto, PaymentProviderDto, TransactionDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class PaymentAdapter {
    static parseCost(data: ForeignData): CostDto {
        return new CostDto(
            data.currency_code,
            data.currency_decimals,
            data.currency_sign,
            data.decimal,
            data.formatted,
            data.value
        );
    }

    static parsePaymentMethod(data: ForeignData): PaymentMethodDto {
        return new PaymentMethodDto(
            data.id,
            data.name,
            data.image
        );
    }

    static parsePaymentProvider(data: ForeignData): PaymentProviderDto {
        return new PaymentProviderDto(
            data.id,
            data.type,
            data.methods.map(PaymentAdapter.parsePaymentMethod)
        );
    }

    static parseTransaction(data: ForeignData): TransactionDto {
        return new TransactionDto(
            data.id,
            data.description,
            data.status,
            PaymentAdapter.parseCost(data.cost),
            data.metadata,
            data.external_checkout_url,
            data.external_details,
            optional(data.order, OrderAdapter.parseOrder),
            optional(data.payment_method, PaymentAdapter.parsePaymentMethod)
        );
    }
}
