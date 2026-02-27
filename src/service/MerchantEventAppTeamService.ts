import { type BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { CommonAdapter, EventAdapter } from '#data/adapter';
import type { AppTeamDto, StatusResponseDto } from '#data/dto';

export class MerchantEventAppTeamService extends BaseService {
    async get(merchantId: string, eventId: string, appTeamId: string): Promise<BaseResponse<AppTeamDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/app-teams/${appTeamId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseAppTeam);
    }

    async delete(merchantId: string, eventId: string, appTeamId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/app-teams/${appTeamId}`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async patch(merchantId: string, eventId: string, appTeamId: string, appTeam: AppTeamDto): Promise<BaseResponse<AppTeamDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/app-teams/${appTeamId}`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name: appTeam.name
            })
            .runAdapter(EventAdapter.parseAppTeam);
    }
}
