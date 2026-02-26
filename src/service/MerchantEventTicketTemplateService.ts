import { BaseResponse, BaseService, type BlobResponse, QueryString } from '@basmilius/http-client';
import { CommonAdapter, EventAdapter } from '../adapter';
import type { StatusResponseDto, TicketTemplateDto } from '../dto';
import type { TicketTemplateType } from '../types';

export class MerchantEventTicketTemplateService extends BaseService {
    async get(merchantId: string, eventId: string, ticketTemplateId: string): Promise<BaseResponse<TicketTemplateDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates/${ticketTemplateId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseTicketTemplate);
    }

    async getDemo(merchantId: string, eventId: string, ticketTemplateId: string): Promise<BlobResponse> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates/${ticketTemplateId}/demo`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .fetchBlob();
    }

    async postVisual(merchantId: string, eventId: string, ticketTemplateId: string, picture: File): Promise<BaseResponse<StatusResponseDto>> {
        const data = new FormData();
        data.append('file', picture);

        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates/${ticketTemplateId}/visual`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body(data)
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async patch(merchantId: string, eventId: string, ticketTemplateId: string, name: string, productId: string | null, variant: TicketTemplateType): Promise<BaseResponse<TicketTemplateDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates/${ticketTemplateId}`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name,
                product_id: productId,
                variant
            })
            .runAdapter(EventAdapter.parseTicketTemplate);
    }

    async delete(merchantId: string, eventId: string, ticketTemplateId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates/${ticketTemplateId}`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async deleteVisual(merchantId: string, eventId: string, ticketTemplateId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates/${ticketTemplateId}/visual`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }
}
