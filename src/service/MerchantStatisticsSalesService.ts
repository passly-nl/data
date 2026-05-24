import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { StatisticsChartAdapter, StatisticsSalesAdapter } from '#data/adapter';
import type { StatisticsChartDto, StatisticsPieChartDto, StatisticsSalesDiscountEfficacyDto, StatisticsSalesFailedTransactionReasonDto, StatisticsSalesLifetimeTotalsDto, StatisticsSalesOrderValueDistributionDto, StatisticsSalesPurchaseBehaviorDto, StatisticsSalesRepeatPurchaseVelocityDto, StatisticsSalesTransactionSuccessRateDto } from '#data/dto';

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

    async getPaymentMethodsChart(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsPieChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/payment-methods-chart/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parsePie);
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

    async getRevenueTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/revenue-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getSalesByDayOfWeek(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/sales-by-day-of-week/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
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

    async getDiscountEfficacy(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsSalesDiscountEfficacyDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/discount-efficacy/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parseDiscountEfficacy);
    }

    async getCartAbandonmentTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/cart-abandonment-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getOrderValueDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsSalesOrderValueDistributionDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/order-value-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parseOrderValueDistribution);
    }

    async getNetRevenueTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/net-revenue-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getFailedTransactionReasons(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsSalesFailedTransactionReasonDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/failed-transaction-reasons/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsSalesAdapter.parseFailedTransactionReason);
    }

    async getOrderOriginDistribution(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsPieChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/order-origin-distribution/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parsePie);
    }

    async getRepeatPurchaseVelocity(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsSalesRepeatPurchaseVelocityDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/repeat-purchase-velocity/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsSalesAdapter.parseRepeatPurchaseVelocity);
    }

    async getAverageTicketPriceTrend(merchantId: string, from: DateTime, to: DateTime): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/sales/average-ticket-price-trend/${from.toSQLDate()}/${to.toSQLDate()}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }
}
