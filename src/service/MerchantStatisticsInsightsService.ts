import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { StatisticsInsightsAdapter } from '#data/adapter';
import type { InsightsResponseDto } from '#data/dto';
import type { InsightCardType } from '#data/types';

export class MerchantStatisticsInsightsService extends BaseService {
    async getInsights(merchantId: string): Promise<BaseResponse<InsightsResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/insights`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsInsightsAdapter.parseInsightsResponse);
    }

    async refreshAll(merchantId: string): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/insights/refresh`)
            .method('post')
            .bearerToken()
            .run();
    }

    async refreshCard(merchantId: string, cardType: InsightCardType): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/insights/card/${cardType}/refresh`)
            .method('post')
            .bearerToken()
            .run();
    }
}
