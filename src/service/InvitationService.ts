import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { AuthAdapter, CommonAdapter, MerchantAdapter } from '#data/adapter';
import type { InvitationDto, StatusResponseDto, UserTokenDto } from '#data/dto';

export class InvitationService extends BaseService {
    async get(invitationId: string): Promise<BaseResponse<InvitationDto>> {
        return await this
            .request(`/invitations/${invitationId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(MerchantAdapter.parseInvitationFromObject);
    }

    async postAccept(invitationId: string, password?: string): Promise<BaseResponse<UserTokenDto>> {
        return await this
            .request(`/invitations/${invitationId}/accept`)
            .method('post')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                password
            })
            .runAdapter(AuthAdapter.parseUserTokenFromObject);
    }

    async postDecline(invitationId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/invitations/${invitationId}/decline`)
            .method('post')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponseFromObject);
    }
}
