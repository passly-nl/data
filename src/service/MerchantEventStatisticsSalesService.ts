import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import { EventStatisticsSalesAdapter, StatisticsSalesAdapter } from '#data/adapter';
import type { EventStatisticsSalesFlowChartDto, StatisticsSalesLifetimeTotalsDto, StatisticsSalesPurchaseBehaviorDto, StatisticsSalesTransactionSuccessRateDto } from '#data/dto';

export class MerchantEventStatisticsSalesService extends BaseService {
    async getLifetimeTotals(merchantId: string, eventId: string): Promise<BaseResponse<StatisticsSalesLifetimeTotalsDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/sales/lifetime-totals`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parseLifetimeTotals);
    }

    async getSalesFlowChart(merchantId: string, eventId: string): Promise<BaseResponse<EventStatisticsSalesFlowChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/sales/sales-flow-chart`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventStatisticsSalesAdapter.parseSalesFlowChart);
    }

    async getRevenueTrend(merchantId: string, eventId: string): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/sales/revenue-trend`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getPaymentMethodsChart(merchantId: string, eventId: string): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/sales/payment-methods-chart`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getPurchaseBehavior(merchantId: string, eventId: string): Promise<BaseResponse<StatisticsSalesPurchaseBehaviorDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/sales/purchase-behavior`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parsePurchaseBehavior);
    }

    async getTransactionSuccessRate(merchantId: string, eventId: string): Promise<BaseResponse<StatisticsSalesTransactionSuccessRateDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/sales/transaction-success-rate`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parseTransactionSuccessRate);
    }

    async getSalesByDayOfWeek(merchantId: string, eventId: string): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/statistics/sales/sales-by-day-of-week`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }
}
