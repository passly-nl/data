import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { BuyerAdapter } from '../adapter';
import type { BuyerDto } from '../dto';

export class MerchantBuyersService extends BaseService {
    async get(merchantId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<BuyerDto>>> {
        return await this
            .request(`/merchants/${merchantId}/buyers`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .bearerToken()
            .runPaginatedAdapter(BuyerAdapter.parseBuyer);
    }
}
