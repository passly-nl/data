import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { EventAdapter } from '#data/adapter';
import type { EventDto } from '#data/dto';

export class MerchantEventsService extends BaseService {
    async get(merchantId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<EventDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .runPaginatedAdapter(EventAdapter.parseEvent);
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
