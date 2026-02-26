import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { OrderAdapter, PaymentAdapter, PublicPayAdapter } from '#data/adapter';
import type { OrderDto, PublicPaymentMethodDto, TransactionDto } from '#data/dto';

export class PublicOrderService extends BaseService {
    async get(orderId: string): Promise<BaseResponse<OrderDto>> {
        return await this
            .request(`/orders/${orderId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(OrderAdapter.parseOrder);
    }

    async getPaymentMethods(orderId: string): Promise<BaseResponse<PublicPaymentMethodDto[]>> {
        return await this
            .request(`/orders/${orderId}/payment-methods`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runArrayAdapter(PublicPayAdapter.parsePublicPaymentMethod);
    }

    async postPay(orderId: string, paymentMethodId: string): Promise<BaseResponse<TransactionDto>> {
        return await this
            .request(`/orders/${orderId}/pay`)
            .method('post')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                payment_method_id: paymentMethodId
            })
            .runAdapter(PaymentAdapter.parseTransaction);
    }
}
