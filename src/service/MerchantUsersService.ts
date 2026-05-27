import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { MerchantAdapter } from '#data/adapter';
import type { InvitationDto, MerchantUserDto } from '#data/dto';
import type { Claim, ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantUsersService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<MerchantUserDto>>> {
        return await this
            .request(`/merchants/${merchantId}/users`)
            .method('get')
            .queryString(buildListQuery(params))
            .bearerToken()
            .runPaginatedAdapter(MerchantAdapter.parseMerchantUser);
    }

    async postInvite(merchantId: string, firstName: string, lastName: string, email: string, claims: Claim[]): Promise<BaseResponse<InvitationDto>> {
        return await this
            .request(`/merchants/${merchantId}/users/invite`)
            .method('post')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .body({
                first_name: firstName,
                last_name: lastName,
                email,
                claims
            })
            .runAdapter(MerchantAdapter.parseInvitation);
    }
}
