import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { PaymentAdapter, StatisticsAdapter, StatisticsChartAdapter, StatisticsOverviewAdapter } from '#data/adapter';
import type { CostDto, StatisticsChartDto, StatisticsOverviewBestRevenueMonthDto, StatisticsOverviewCancellationFunnelDto, StatisticsOverviewEventPerformanceDto, StatisticsOverviewKPIsDto, StatisticsOverviewReservationConversionRateDto, StatisticsOverviewTopShopDto, StatisticsTrendDto } from '#data/dto';

export class MerchantStatisticsOverviewService extends BaseService {
    async getBestRevenueMonth(merchantId: string): Promise<BaseResponse<StatisticsOverviewBestRevenueMonthDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/best-revenue-month`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOverviewAdapter.parseBestRevenueMonth);
    }

    async getEventPerformance(merchantId: string): Promise<BaseResponse<StatisticsOverviewEventPerformanceDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/event-performance`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOverviewAdapter.parseEventPerformance);
    }

    async getKeyPerformanceIndicators(merchantId: string): Promise<BaseResponse<StatisticsOverviewKPIsDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/key-performance-indicators`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOverviewAdapter.parseKPIs);
    }

    async getRevenueAnalysis(merchantId: string): Promise<BaseResponse<StatisticsChartDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/revenue-analysis`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsChartAdapter.parseChart);
    }

    async getRevenueMonthComparison(merchantId: string): Promise<BaseResponse<StatisticsTrendDto<CostDto>>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/revenue-month-comparison`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(r => StatisticsAdapter.parseTrend(r, PaymentAdapter.parseCost));
    }

    async getTopShops(merchantId: string): Promise<BaseResponse<StatisticsOverviewTopShopDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/top-shops`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(StatisticsOverviewAdapter.parseTopShop);
    }

    async getCancellationFunnel(merchantId: string): Promise<BaseResponse<StatisticsOverviewCancellationFunnelDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/cancellation-funnel`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOverviewAdapter.parseCancellationFunnel);
    }

    async getReservationConversionRate(merchantId: string): Promise<BaseResponse<StatisticsOverviewReservationConversionRateDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/reservation-conversion-rate`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsOverviewAdapter.parseReservationConversionRate);
    }
}
