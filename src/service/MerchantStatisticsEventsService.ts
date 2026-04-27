import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import type { DateTime } from 'luxon';
import { StatisticsEventsAdapter } from '#data/adapter';
import type { StatisticsEventsOverviewDto, StatisticsOverviewEventPerformanceDto } from '#data/dto';

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

    async getPerformance(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsOverviewEventPerformanceDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/performance/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsEventsAdapter.parsePerformance);
    }

    async getSellThroughTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/sell-through-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getSalesVelocity(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/sales-velocity/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getPublicationStatus(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/publication-status/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }
}
