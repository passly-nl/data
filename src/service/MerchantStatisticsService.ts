import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { StatisticsChartAdapter } from '#data/adapter';
import type { StatisticsChartDto } from '#data/dto';

export class MerchantStatisticsService extends BaseService {
    async getRevenueTrend(merchantId: string): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/revenue-trend`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

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
