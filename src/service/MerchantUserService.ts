import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { MerchantAdapter } from '#data/adapter';
import type { MerchantUserDto } from '#data/dto';
import type { Claim } from '#data/types';

export class MerchantUserService extends BaseService {
    async get(merchantId: string, userId: string): Promise<BaseResponse<MerchantUserDto>> {
        return await this
            .request(`/merchants/${merchantId}/users/${userId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(MerchantAdapter.parseMerchantUser);
    }

    async put(merchantId: string, userId: string, isManager: boolean, claims: Claim[]): Promise<BaseResponse<MerchantUserDto>> {
        return await this
            .request(`/merchants/${merchantId}/users/${userId}`)
            .method('put')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                is_manager: isManager,
                claims
            })
            .runAdapter(MerchantAdapter.parseMerchantUser);
    }

    async remove(merchantId: string, userId: string): Promise<BaseResponse<void>> {
        return await this
            .request(`/merchants/${merchantId}/users/${userId}`)
            .method('delete')
            .bearerToken()
            .runEmpty();
    }
}
