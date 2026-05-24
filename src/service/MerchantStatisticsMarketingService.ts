import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { StatisticsChartAdapter, StatisticsMarketingAdapter } from '#data/adapter';
import type { StatisticsChartDto, StatisticsMarketingCampaignDto, StatisticsMarketingOverviewDto, StatisticsMarketingReferrerDto, StatisticsMarketingShortlinkRoiDto, StatisticsMarketingSourceBreakdownDto, StatisticsMarketingSourceFunnelDto, StatisticsMarketingSourceMediumMatrixDto, StatisticsPieChartDto } from '#data/dto';

export class MerchantStatisticsMarketingService extends BaseService {
    async getOverview(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsMarketingOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/overview/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsMarketingAdapter.parseOverview);
    }

    async getSourceBreakdown(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsMarketingSourceBreakdownDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/source-breakdown/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsMarketingAdapter.parseSourceBreakdown);
    }

    async getTopCampaigns(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsMarketingCampaignDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/top-campaigns/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsMarketingAdapter.parseTopCampaigns);
    }

    async getSourceMediumMatrix(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsMarketingSourceMediumMatrixDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/source-medium-matrix/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsMarketingAdapter.parseSourceMediumMatrix);
    }

    async getPaidAdAttribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsPieChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/paid-ad-attribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parsePie);
    }

    async getTopReferrers(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsMarketingReferrerDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/top-referrers/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsMarketingAdapter.parseTopReferrers);
    }

    async getSourceFunnel(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsMarketingSourceFunnelDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/source-funnel/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsMarketingAdapter.parseSourceFunnel);
    }

    async getShortlinkRoi(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsMarketingShortlinkRoiDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/shortlink-roi/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsMarketingAdapter.parseShortlinkRoi);
    }

    async getAttributionCoverageTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/marketing/attribution-coverage-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }
}
