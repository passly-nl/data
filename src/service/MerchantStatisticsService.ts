import { type BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';

export class MerchantStatisticsService extends BaseService {
    async getRevenueTrend(merchantId: string): Promise<BaseResponse<ApexOptions>> {
        return this
            .request(`/merchants/${merchantId}/statistics/revenue-trend`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(r => r);
    }
}
