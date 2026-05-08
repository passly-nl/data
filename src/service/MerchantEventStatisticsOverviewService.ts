import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { EventStatisticsOverviewAdapter } from '#data/adapter';
import type { EventStatisticsFinancialDto, EventStatisticsKpisDto, EventStatisticsStatusDto } from '#data/dto';

export class MerchantEventStatisticsOverviewService extends BaseService {
    async getFinancial(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsFinancialDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/overview/financial`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventStatisticsOverviewAdapter.parseFinancial);
    }

    async getKeyPerformanceIndicators(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsKpisDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/overview/key-performance-indicators`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventStatisticsOverviewAdapter.parseKpis);
    }

    async getStatus(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsStatusDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/overview/status`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventStatisticsOverviewAdapter.parseStatus);
    }
}
