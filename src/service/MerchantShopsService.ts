import { BaseResponse, BaseService, Paginated } from '@basmilius/http-client';
import { EventAdapter } from '#data/adapter';
import type { ShopDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantShopsService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<ShopDto>>> {
        return await this
            .request(`/merchants/${merchantId}/shops`)
            .method('get')
            .queryString(buildListQuery(params))
            .bearerToken()
            .runPaginatedAdapter(EventAdapter.parseShop);
    }
}
