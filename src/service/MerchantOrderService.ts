import { BaseResponse, BaseService, BlobResponse, QueryString } from '@basmilius/http-client';
import { CashFlowAdapter, OrderAdapter, RefundAdapter, TicketAdapter } from '#data/adapter';
import type { CashFlowDto, OrderDto, RefundDto, TicketDto } from '#data/dto';
import type { RefundReason } from '#data/types';

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

    async getCashFlow(merchantId: string, orderId: string): Promise<BaseResponse<CashFlowDto>> {
        return await this
            .request(`/merchants/${merchantId}/orders/${orderId}/cash-flow`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CashFlowAdapter.parseCashFlow);
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

    async postRefund(merchantId: string, orderId: string, ticketIds: string[], reason: RefundReason, note: string | null = null): Promise<BaseResponse<RefundDto>> {
        return await this
            .request(`/merchants/${merchantId}/orders/${orderId}/refund`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                ticket_ids: ticketIds,
                reason,
                note
            })
            .runAdapter(RefundAdapter.parseRefund);
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
