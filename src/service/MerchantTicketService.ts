import { BaseResponse, BaseService, BlobResponse, QueryString } from '@basmilius/http-client';
import { TicketAdapter } from '#data/adapter';
import type { TicketDto } from '#data/dto';

export class MerchantTicketService extends BaseService {
    async get(merchantId: string, ticketId: string): Promise<BaseResponse<TicketDto>> {
        return await this
            .request(`/merchants/${merchantId}/tickets/${ticketId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(TicketAdapter.parseTicketFromObject);
    }

    async getPass(merchantId: string, ticketId: string): Promise<BlobResponse> {
        return await this
            .request(`/merchants/${merchantId}/tickets/${ticketId}/pass`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .fetchBlob();
    }

    async getPDF(merchantId: string, ticketId: string): Promise<BlobResponse> {
        return await this
            .request(`/merchants/${merchantId}/tickets/${ticketId}/pdf`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .fetchBlob();
    }
}
