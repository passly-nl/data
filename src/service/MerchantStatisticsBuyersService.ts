import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { StatisticsBuyersAdapter, StatisticsChartAdapter } from '#data/adapter';
import type { StatisticsBuyersAcquisitionSourceDto, StatisticsBuyersAgeGenderMatrixDto, StatisticsBuyersCohortRetentionDto, StatisticsBuyersDeviceConversionDto, StatisticsBuyersGeographicDistributionDto, StatisticsBuyersOverviewDto, StatisticsBuyersRankedDto, StatisticsBuyersSpendBucketsDto, StatisticsChartDto } from '#data/dto';

export class MerchantStatisticsBuyersService extends BaseService {
    async getAcquisition(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/acquisition-chart/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getAgeDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/age-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getBrowserDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/browser-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getGenderDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/gender-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getLanguageDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/language-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getOsDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/os-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getOverview(merchantId: string): Promise<BaseResponse<StatisticsBuyersOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/overview`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsBuyersAdapter.parseOverview);
    }

    async getTopBuyers(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsBuyersRankedDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/top-buyers/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsBuyersAdapter.parseRanked);
    }

    async getGeographicDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsBuyersGeographicDistributionDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/geographic-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsBuyersAdapter.parseGeographicDistribution);
    }

    async getCohortRetention(merchantId: string): Promise<BaseResponse<StatisticsBuyersCohortRetentionDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/cohort-retention`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsBuyersAdapter.parseCohortRetention);
    }

    async getSpendBuckets(merchantId: string): Promise<BaseResponse<StatisticsBuyersSpendBucketsDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/spend-buckets`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsBuyersAdapter.parseSpendBuckets);
    }

    async getAcquisitionSourceSplit(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsBuyersAcquisitionSourceDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/acquisition-source-split/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsBuyersAdapter.parseAcquisitionSource);
    }

    async getAgeGenderMatrix(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsBuyersAgeGenderMatrixDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/age-gender-matrix/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsBuyersAdapter.parseAgeGenderMatrix);
    }

    async getDeviceConversion(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsBuyersDeviceConversionDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/device-conversion/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsBuyersAdapter.parseDeviceConversion);
    }
}
