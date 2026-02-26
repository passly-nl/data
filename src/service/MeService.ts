import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { AuthAdapter, CommonAdapter } from '../adapter';
import type { StatusResponseDto, TotpStateDto, UserDto } from '../dto';

export class MeService extends BaseService {
    async get(): Promise<BaseResponse<UserDto>> {
        return await this
            .request('/me')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(AuthAdapter.parseUser);
    }

    async getTotp(): Promise<BaseResponse<TotpStateDto>> {
        return await this
            .request('/me/totp')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(AuthAdapter.parseTotpState);
    }

    async post(firstName: string, lastName: string, phoneNumber: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request('/me')
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber
            })
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async postChangePassword(password: string, newPassword: string, newPasswordConfirm: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request('/me/change-password')
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                password,
                new_password: newPassword,
                new_password_confirm: newPasswordConfirm
            })
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async postProfilePicture(picture: File): Promise<BaseResponse<StatusResponseDto>> {
        const data = new FormData();
        data.append('file', picture);

        return await this
            .request('/me/profile-picture')
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body(data)
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async postTotp(secret: string, code: string): Promise<BaseResponse<TotpStateDto>> {
        return await this
            .request('/me/totp')
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                secret,
                code
            })
            .runAdapter(AuthAdapter.parseTotpState);
    }

    async deleteProfilePicture(): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request('/me/profile-picture')
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async deleteTotp(code: string): Promise<BaseResponse<TotpStateDto>> {
        return await this
            .request('/me/totp')
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                code
            })
            .runAdapter(AuthAdapter.parseTotpState);
    }
}
