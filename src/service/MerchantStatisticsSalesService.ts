import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import type { DateTime } from 'luxon';
import { StatisticsSalesAdapter } from '#data/adapter';
import type { StatisticsSalesLifetimeTotalsDto, StatisticsSalesPurchaseBehaviorDto, StatisticsSalesTransactionSuccessRateDto } from '#data/dto';

export class MerchantStatisticsSalesService extends BaseService {
    async getLifetimeTotals(merchantId: string): Promise<BaseResponse<StatisticsSalesLifetimeTotalsDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/lifetime-totals`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parseLifetimeTotals);
    }

    async getPaymentMethodsChart(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/payment-methods-chart/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getPurchaseBehavior(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsSalesPurchaseBehaviorDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/purchase-behavior/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parsePurchaseBehavior);
    }

    async getRevenueTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/revenue-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getSalesByDayOfWeek(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/sales-by-day-of-week/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getTransactionSuccessRate(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsSalesTransactionSuccessRateDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/transaction-success-rate/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parseTransactionSuccessRate);
    }
}
