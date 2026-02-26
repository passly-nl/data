import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { EventAdapter } from '../adapter';
import type { EventStatisticsAttendanceDto, EventStatisticsBuyerTotalsDto, EventStatisticsFinancialDto, EventStatisticsOrdersDto, EventStatisticsScansDto, EventStatisticsSwapTotalsDto } from '../dto';

export class MerchantEventStatisticsService extends BaseService {
    async getAttendance(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsAttendanceDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/attendance`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEventStatisticsAttendance);
    }

    async getBuyers(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsBuyerTotalsDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/buyers`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEventStatisticsBuyerTotals);
    }

    async getFinancial(merchant: string, event: string): Promise<BaseResponse<EventStatisticsFinancialDto>> {
        return await this
            .request(`/merchants/${merchant}/events/${event}/statistics/financial`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEventStatisticsFinancial);
    }

    async getOrders(merchant: string, event: string): Promise<BaseResponse<EventStatisticsOrdersDto>> {
        return await this
            .request(`/merchants/${merchant}/events/${event}/statistics/orders`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEventStatisticsOrders);
    }

    async getScans(merchant: string, event: string): Promise<BaseResponse<EventStatisticsScansDto>> {
        return await this
            .request(`/merchants/${merchant}/events/${event}/statistics/scans`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEventStatisticsScans);
    }

    async getSwaps(merchant: string, event: string): Promise<BaseResponse<EventStatisticsSwapTotalsDto>> {
        return await this
            .request(`/merchants/${merchant}/events/${event}/statistics/swaps`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEventStatisticsSwapTotals);
    }
}
