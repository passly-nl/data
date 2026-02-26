import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { StatisticsEventsAdapter } from '../adapter';
import type { StatisticsEventsOverviewDto } from '../dto';

export class MerchantStatisticsEventsService extends BaseService {
    async getOverview(merchantId: string): Promise<BaseResponse<StatisticsEventsOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/overview`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsEventsAdapter.parseOverview);
    }
}
