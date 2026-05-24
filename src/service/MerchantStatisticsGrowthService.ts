import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { StatisticsBuyersAdapter, StatisticsChartAdapter, StatisticsGrowthAdapter } from '#data/adapter';
import type { MilestoneDto, StatisticsBuyersAcquisitionSourceDto, StatisticsChartDto, StatisticsGrowthCmgrDto, StatisticsGrowthOverviewDto } from '#data/dto';

export class MerchantStatisticsGrowthService extends BaseService {
    async getOverview(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsGrowthOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/growth/overview/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsGrowthAdapter.parseOverview);
    }

    async getYearOverYear(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/growth/year-over-year/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getMilestones(merchantId: string): Promise<BaseResponse<MilestoneDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/growth/milestones`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsGrowthAdapter.parseMilestone);
    }

    async getForecast(merchantId: string): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/growth/forecast`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getCompoundMonthlyGrowthRate(merchantId: string): Promise<BaseResponse<StatisticsGrowthCmgrDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/growth/cmgr`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsGrowthAdapter.parseCmgr);
    }

    async getBuyerGrowthSource(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsBuyersAcquisitionSourceDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/growth/buyer-growth-source/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsBuyersAdapter.parseAcquisitionSource);
    }
}
