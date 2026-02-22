import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { TicketAdapter } from '../adapter';
import type { TicketDto } from '../dto';

export class MerchantTicketsService extends BaseService {
    async get(merchantId: string, offset: number, limit: number, filter?: Record<string, string | number | boolean>): Promise<BaseResponse<Paginated<TicketDto>>> {
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
            .request(`/merchants/${merchantId}/tickets`)
            .method('get')
            .queryString(query)
            .bearerToken()
            .runPaginatedAdapter(TicketAdapter.parseTicketFromObject);
    }
}
