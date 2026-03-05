import { type BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { ServiceInfoDto } from '#data/dto';

export class ServicesService extends BaseService {
    async checkEmail(email: string): Promise<BaseResponse<CheckEmailResponse>> {
        return await this
            .request('/service/check-email')
            .method('get')
            .queryString(QueryString.builder()
                .append('email', email)
                .append('language', 'nl'))
            .run();
    }

    async getInfo(): Promise<BaseResponse<ServiceInfoDto>> {
        return await this
            .request('/service/info')
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .run();
    }
}

type CheckEmailResponse = {
    readonly email: string;
    readonly suggestions?: string[];
};
