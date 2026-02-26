import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { OrderAdapter } from '../adapter';
import type { OrderDto } from '../dto';

export class MerchantOrdersService extends BaseService {
    async get(merchantId: string, offset: number, limit: number, filter?: Record<string, string | number | boolean>): Promise<BaseResponse<Paginated<OrderDto>>> {
        const query = QueryString
            .builder()
            .append('language', 'nl')
            .append('offset', offset)
            .append('limit', limit);

        if (filter) {
            Object
                .entries(filter)
                .forEach(([key, value]) => query.append(key, value));
        }

        return await this
            .request(`/merchants/${merchantId}/orders`)
            .method('get')
            .queryString(query)
            .bearerToken()
            .runPaginatedAdapter(OrderAdapter.parseOrder);
    }
}
