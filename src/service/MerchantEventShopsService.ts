import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { CommonAdapter, EventAdapter } from '#data/adapter';
import type { ShopDto, StatusResponseDto } from '#data/dto';

export class MerchantEventShopsService extends BaseService {
    async get(merchantId: string, eventId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<ShopDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .bearerToken()
            .runPaginatedAdapter(EventAdapter.parseShop);
    }

    async post(merchantId: string, eventId: string, name: string, startsOn: DateTime, endsOn: DateTime): Promise<BaseResponse<ShopDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name,
                starts_on: startsOn,
                ends_on: endsOn
            })
            .runAdapter(EventAdapter.parseShop);
    }

    async delete(merchantId: string, eventId: string, shopId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }
}
