import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import { EventStatisticsOperationsAdapter } from '#data/adapter';
import type { EventStatisticsAppTeamDto, EventStatisticsAttendanceDto, EventStatisticsOperationsOverviewDto, EventStatisticsSwapsDto } from '#data/dto';

export class MerchantEventStatisticsOperationsService extends BaseService {
    async getOverview(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsOperationsOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/operations/overview`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventStatisticsOperationsAdapter.parseOverview);
    }

    async getAppTeams(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsAppTeamDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/operations/app-teams`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(EventStatisticsOperationsAdapter.parseAppTeam);
    }

    async getAttendance(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsAttendanceDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/operations/attendance`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventStatisticsOperationsAdapter.parseAttendance);
    }

    async getScansTrend(merchantId: string, eventId: string): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/operations/scans-trend`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getSwaps(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsSwapsDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/operations/swaps`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventStatisticsOperationsAdapter.parseSwaps);
    }
}
