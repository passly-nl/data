import { type BaseResponse, BaseService, type Paginated, QueryString } from '@basmilius/http-client';
import { EventAdapter } from '#data/adapter';
import type { AppTeamDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantEventAppTeamsService extends BaseService {
    async get(merchantId: string, eventId: string, params: ListParams): Promise<BaseResponse<Paginated<AppTeamDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/app-teams`)
            .method('get')
            .bearerToken()
            .queryString(buildListQuery(params))
            .runPaginatedAdapter(EventAdapter.parseAppTeam);
    }

    async post(merchantId: string, eventId: string, name: string): Promise<BaseResponse<AppTeamDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/app-teams`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name
            })
            .runAdapter(EventAdapter.parseAppTeam);
    }
}
