import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import { EventStatisticsBuyersAdapter } from '#data/adapter';
import type { EventStatisticsBuyersOverviewDto, StatisticsBuyersRankedDto } from '#data/dto';

export class MerchantEventStatisticsBuyersService extends BaseService {
    async getOverview(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsBuyersOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers/overview`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventStatisticsBuyersAdapter.parseOverview);
    }

    async getAcquisitionChart(merchantId: string, eventId: string): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers/acquisition-chart`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getAgeDistribution(merchantId: string, eventId: string): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers/age-distribution`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getGenderDistribution(merchantId: string, eventId: string): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers/gender-distribution`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getLanguageDistribution(merchantId: string, eventId: string): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers/language-distribution`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getBrowserDistribution(merchantId: string, eventId: string): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers/browser-distribution`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getOsDistribution(merchantId: string, eventId: string): Promise<BaseResponse<Record<string, number>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers/os-distribution`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getTopBuyers(merchantId: string, eventId: string): Promise<BaseResponse<StatisticsBuyersRankedDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers/top-buyers`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(EventStatisticsBuyersAdapter.parseRanked);
    }
}
