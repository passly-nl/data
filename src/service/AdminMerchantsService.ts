import { type BaseResponse, BaseService, type Paginated } from '@basmilius/http-client';
import { MerchantAdapter } from '#data/adapter';
import { MerchantDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class AdminMerchantsService extends BaseService {
    async get(params: ListParams): Promise<BaseResponse<Paginated<MerchantDto>>> {
        return await this
            .request('/admin/merchants')
            .method('get')
            .queryString(buildListQuery(params))
            .bearerToken()
            .runPaginatedAdapter(MerchantAdapter.parseMerchant);
    }
}
