import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { MerchantAdapter } from '../adapter';
import type { InvitationDto, MerchantUserDto } from '../dto';
import type { Claim } from '../types';

export class MerchantUsersService extends BaseService {
    async get(merchantId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<MerchantUserDto>>> {
        return await this
            .request(`/merchants/${merchantId}/users`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .bearerToken()
            .runPaginatedAdapter(MerchantAdapter.parseMerchantUserFromObject);
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
            .runAdapter(MerchantAdapter.parseInvitationFromObject);
    }
}
