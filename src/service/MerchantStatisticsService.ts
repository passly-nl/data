import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';

export class MerchantStatisticsService extends BaseService {
    async getStatus(merchantId: string): Promise<BaseResponse<boolean>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/status`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }
}
