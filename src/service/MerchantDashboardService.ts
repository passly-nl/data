import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { MerchantDashboardAdapter } from '../adapter';
import type { MerchantDashboardKeyMetricsDto, MerchantDashboardUpcomingEventDto } from '../dto';

export class MerchantDashboardService extends BaseService {
    async getKeyMetrics(merchantId: string): Promise<BaseResponse<MerchantDashboardKeyMetricsDto>> {
        return await this
            .request(`/merchants/${merchantId}/dashboard/key-metrics`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(MerchantDashboardAdapter.parseKeyMetrics);
    }

    async getUpcomingEvents(merchantId: string): Promise<BaseResponse<MerchantDashboardUpcomingEventDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/dashboard/upcoming-events`)
            .method('get')
            .bearerToken()
            .runArrayAdapter(MerchantDashboardAdapter.parseUpcomingEvent);
    }
}
