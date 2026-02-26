import { BaseResponse, BaseService, BlobResponse, QueryString } from '@basmilius/http-client';
import { OrderAdapter, TicketAdapter } from '#data/adapter';
import type { OrderDto, TicketDto } from '#data/dto';

export class MerchantOrderService extends BaseService {
    async get(merchantId: string, orderId: string): Promise<BaseResponse<OrderDto>> {
        return await this
            .request(`/merchants/${merchantId}/orders/${orderId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(OrderAdapter.parseOrder);
    }

    async getPasses(merchantId: string, orderId: string): Promise<BlobResponse> {
        return await this
            .request(`/merchants/${merchantId}/orders/${orderId}/passes`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .fetchBlob();
    }

    async getPDF(merchantId: string, orderId: string): Promise<BlobResponse> {
        return await this
            .request(`/merchants/${merchantId}/orders/${orderId}/pdf`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .fetchBlob();
    }

    async getTickets(merchantId: string, orderId: string): Promise<BaseResponse<TicketDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/orders/${orderId}/tickets`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runArrayAdapter(TicketAdapter.parseTicket);
    }

    async postResend(merchantId: string, orderId: string): Promise<BaseResponse<never>> {
        return await this
            .request(`/merchants/${merchantId}/orders/${orderId}/resend`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runEmpty();
    }
}
