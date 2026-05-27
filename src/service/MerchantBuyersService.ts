import { BaseResponse, BaseService, Paginated } from '@basmilius/http-client';
import { BuyerAdapter } from '#data/adapter';
import type { BuyerDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantBuyersService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<BuyerDto>>> {
        return await this
            .request(`/merchants/${merchantId}/buyers`)
            .method('get')
            .queryString(buildListQuery(params))
            .bearerToken()
            .runPaginatedAdapter(BuyerAdapter.parseBuyer);
    }
}
