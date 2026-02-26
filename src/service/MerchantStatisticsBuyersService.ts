import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import type { DateTime } from 'luxon';
import { StatisticsBuyersAdapter } from '../adapter';
import type { StatisticsBuyersOverviewDto, StatisticsBuyersRankedDto } from '../dto';

export class MerchantStatisticsBuyersService extends BaseService {
    async getAcquisition(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/buyers/acquisition-chart/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
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
}
