import { type BaseResponse, BaseService, QueryString } from '@basmilius/http-client';

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
}

type CheckEmailResponse = {
    readonly email: string;
    readonly suggestions?: string[];
};
