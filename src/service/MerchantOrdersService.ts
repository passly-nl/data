import { BaseResponse, BaseService, Paginated } from '@basmilius/http-client';
import { OrderAdapter } from '#data/adapter';
import type { OrderDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantOrdersService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<OrderDto>>> {
        return await this
            .request(`/merchants/${merchantId}/orders`)
            .method('get')
            .queryString(buildListQuery(params))
            .bearerToken()
            .runPaginatedAdapter(OrderAdapter.parseOrder);
    }
}
