import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { StatisticsChartAdapter, StatisticsRefundsAdapter } from '#data/adapter';
import type { StatisticsChartDto, StatisticsPieChartDto, StatisticsRefundsAmountDistributionDto, StatisticsRefundsOverviewDto, StatisticsRefundsTopEventDto, StatisticsRefundsVelocityDto } from '#data/dto';

export class MerchantStatisticsRefundsService extends BaseService {
    async getOverview(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsRefundsOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/refunds/overview/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsRefundsAdapter.parseOverview);
    }

    async getRefundRateTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/refunds/refund-rate-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getReasonsDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsPieChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/refunds/reasons-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parsePie);
    }

    async getTopEvents(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsRefundsTopEventDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/refunds/top-events/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsRefundsAdapter.parseTopEvents);
    }

    async getVelocity(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsRefundsVelocityDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/refunds/velocity/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsRefundsAdapter.parseVelocity);
    }

    async getAmountDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsRefundsAmountDistributionDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/refunds/amount-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsRefundsAdapter.parseAmountDistribution);
    }

    async getNetRevenueTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/refunds/net-revenue-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }
}
