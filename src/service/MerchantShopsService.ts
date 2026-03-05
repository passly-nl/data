import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { EventAdapter } from '#data/adapter';
import type { ShopDto } from '#data/dto';

export class MerchantShopsService extends BaseService {
    async get(merchantId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<ShopDto>>> {
        return await this
            .request(`/merchants/${merchantId}/shops`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .bearerToken()
            .runPaginatedAdapter(EventAdapter.parseShop);
    }
}
