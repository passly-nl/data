import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { StatisticsChartAdapter, StatisticsOperationsAdapter } from '#data/adapter';
import type { StatisticsChartDto, StatisticsOperationsAppTeamDto, StatisticsOperationsNoShowRateDto, StatisticsOperationsOverviewDto, StatisticsOperationsScanTimeDistributionDto, StatisticsOperationsStewardDto, StatisticsOperationsStockUtilizationDto, StatisticsOperationsTasksOverviewDto } from '#data/dto';

export class MerchantStatisticsOperationsService extends BaseService {
    async getOverview(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsOperationsOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/overview/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOperationsAdapter.parseOverview);
    }

    async getScansTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/scans-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getCheckinRatePerEvent(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/checkin-rate-per-event/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getAppTeams(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsOperationsAppTeamDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/app-teams/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsOperationsAdapter.parseAppTeam);
    }

    async getTasksOverview(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsOperationsTasksOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/tasks-overview/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOperationsAdapter.parseTasksOverview);
    }

    async getNoShowRate(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsOperationsNoShowRateDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/no-show-rate/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOperationsAdapter.parseNoShowRate);
    }

    async getScanTimeDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsOperationsScanTimeDistributionDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/scan-time-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOperationsAdapter.parseScanTimeDistribution);
    }

    async getStewardLeaderboard(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsOperationsStewardDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/steward-leaderboard/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsOperationsAdapter.parseSteward);
    }

    async getStockUtilization(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsOperationsStockUtilizationDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/stock-utilization/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsOperationsAdapter.parseStockUtilization);
    }
}
