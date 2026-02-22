import { adapter } from '@basmilius/http-client';
import { OrderAdapter } from '#data/adapter';
import { CostDto, PaymentMethodDto, PaymentProviderDto, TransactionDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class PaymentAdapter {
    static parseCostFromObject(cost: Record<string, any>): CostDto {
        return new CostDto(
            cost.currency_code,
            cost.currency_decimals,
            cost.currency_sign,
            cost.decimal,
            cost.formatted,
            cost.value
        );
    }

    static parsePaymentMethodFromObject(method: Record<string, any>): PaymentMethodDto {
        return new PaymentMethodDto(
            method.id,
            method.name,
            method.image
        );
    }

    static parsePaymentProviderFromObject(provider: Record<string, any>): PaymentProviderDto {
        return new PaymentProviderDto(
            provider.id,
            provider.type,
            provider.methods.map(PaymentAdapter.parsePaymentMethodFromObject)
        );
    }

    static parseTransactionFromObject(transaction: Record<string, any>): TransactionDto {
        return new TransactionDto(
            transaction.id,
            transaction.description,
            transaction.status,
            PaymentAdapter.parseCostFromObject(transaction.cost),
            transaction.metadata,
            transaction.external_checkout_url,
            transaction.external_details,
            optional(transaction.order, OrderAdapter.parseOrderFromObject),
            optional(transaction.payment_method, PaymentAdapter.parsePaymentMethodFromObject)
        );
    }
}
