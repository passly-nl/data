import { BaseResponse, BaseService, type Paginated, QueryString } from '@basmilius/http-client';
import { AuthAdapter } from '../adapter';
import type { UserTokenDto } from '../dto';
import type { Claim } from '../types';

export class AuthService extends BaseService {
    async get(): Promise<BaseResponse<UserTokenDto>> {
        return await this
            .request('/auth')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(AuthAdapter.parseUserToken);
    }

    async getClaims(): Promise<BaseResponse<Claim[]>> {
        return await this
            .request('/auth/claims')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(r => Object.values(r) as Claim[]);
    }

    async getPasswordCompromised(): Promise<BaseResponse<boolean>> {
        return await this
            .request('/auth/password-compromised')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runDataKey<{ readonly compromised: boolean; }>('compromised');
    }

    async getSessions(offset: number, limit: number): Promise<BaseResponse<Paginated<UserTokenDto>>> {
        return await this
            .request('/auth/sessions')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .runPaginatedAdapter(AuthAdapter.parseUserToken);
    }

    async post(email: string, password: string, code?: string): Promise<BaseResponse<UserTokenDto>> {
        return await this
            .request('/auth')
            .method('post')
            .body({email, password, code})
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(AuthAdapter.parseUserToken);
    }

    async deleteSession(token: string): Promise<BaseResponse<never>> {
        return await this
            .request('/auth/sessions')
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                token
            })
            .runEmpty();
    }
}
