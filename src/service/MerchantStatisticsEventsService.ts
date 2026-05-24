import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { StatisticsChartAdapter, StatisticsEventsAdapter } from '#data/adapter';
import type { StatisticsChartDto, StatisticsEventsOverviewDto, StatisticsEventsSalesCurveDto, StatisticsEventsSellOutTimingDto, StatisticsEventsTimeToEventDto, StatisticsOverviewEventPerformanceDto, StatisticsPieChartDto } from '#data/dto';

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

    async getSellThroughTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/sell-through-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getSalesVelocity(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/sales-velocity/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getPublicationStatus(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsPieChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/publication-status/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parsePie);
    }

    async getTimeToEventDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsEventsTimeToEventDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/time-to-event/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsEventsAdapter.parseTimeToEvent);
    }

    async getSalesCurvePerEvent(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsEventsSalesCurveDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/sales-curve/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsEventsAdapter.parseSalesCurve);
    }

    async getSellOutTiming(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsEventsSellOutTimingDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/sell-out-timing/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsEventsAdapter.parseSellOutTiming);
    }

    async getDayOfWeekDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/events/day-of-week-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }
}
