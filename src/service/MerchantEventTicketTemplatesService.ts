import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { FluxFormSelectEntry } from '@flux-ui/types';
import { EventAdapter, FluxAdapter } from '#data/adapter';
import type { TicketTemplateDto } from '#data/dto';
import type { TicketTemplateType } from '#data/types';
import { jsonBlob } from '#data/util';

export class MerchantEventTicketTemplatesService extends BaseService {
    async get(merchantId: string, eventId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<TicketTemplateDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .bearerToken()
            .runPaginatedAdapter(EventAdapter.parseTicketTemplate);
    }

    async getSelectOptions(merchantId: string, eventId: string, searchQuery: string | null = null, ids: string[] | null = null): Promise<BaseResponse<FluxFormSelectEntry[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates/select-options`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .appendArray('ids[]', ids)
                .append('searchQuery', searchQuery))
            .bearerToken()
            .runArrayAdapter(FluxAdapter.parseFluxFormSelectEntry);
    }

    async post(merchantId: string, eventId: string, name: string, productId: string | null, variant: TicketTemplateType, visual: File): Promise<BaseResponse<TicketTemplateDto>> {
        const body = new FormData();

        body.append('data', jsonBlob({
            name,
            product_id: productId,
            variant
        }));

        body.append('visual', visual);

        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/ticket-templates`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body(body)
            .runAdapter(EventAdapter.parseTicketTemplate);
    }
}
