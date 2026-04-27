import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import type { DateTime } from 'luxon';
import { StatisticsGrowthAdapter } from '#data/adapter';
import type { MilestoneDto, StatisticsGrowthOverviewDto } from '#data/dto';

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

    async getYearOverYear(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/growth/year-over-year/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
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
}
