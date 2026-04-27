import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import type { DateTime } from 'luxon';
import { StatisticsOperationsAdapter } from '#data/adapter';
import type { StatisticsOperationsAppTeamDto, StatisticsOperationsOverviewDto, StatisticsOperationsTasksOverviewDto } from '#data/dto';

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

    async getScansTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/scans-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getCheckinRatePerEvent(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/operations/checkin-rate-per-event/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
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
}
