import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { FluxFormSelectEntry } from '@flux-ui/types';
import type { DateTime } from 'luxon';
import { EventAdapter, FluxAdapter } from '#data/adapter';
import type { EventDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantEventsService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<EventDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events`)
            .method('get')
            .bearerToken()
            .queryString(buildListQuery(params))
            .runPaginatedAdapter(EventAdapter.parseEvent);
    }

    async getSelectOptions(merchantId: string, searchQuery: string | null = null, ids: string[] | null = null): Promise<BaseResponse<FluxFormSelectEntry[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/select-options`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .appendArray('ids[]', ids)
                .append('searchQuery', searchQuery))
            .bearerToken()
            .runArrayAdapter(FluxAdapter.parseFluxFormSelectEntry);
    }

    async post(merchantId: string, name: string, description: string, startsOn: DateTime, endsOn: DateTime, minimumAge: number): Promise<BaseResponse<EventDto>> {
        return await this
            .request(`/merchants/${merchantId}/events`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name,
                description,
                starts_on: startsOn,
                ends_on: endsOn,
                minimum_age: minimumAge
            })
            .runAdapter(EventAdapter.parseEvent);
    }
}
