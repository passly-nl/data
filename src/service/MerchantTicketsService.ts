import { BaseResponse, BaseService, Paginated } from '@basmilius/http-client';
import { TicketAdapter } from '#data/adapter';
import type { TicketDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantTicketsService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<TicketDto>>> {
        return await this
            .request(`/merchants/${merchantId}/tickets`)
            .method('get')
            .queryString(buildListQuery(params))
            .bearerToken()
            .runPaginatedAdapter(TicketAdapter.parseTicket);
    }
}
