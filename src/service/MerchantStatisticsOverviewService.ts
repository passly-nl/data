import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import { PaymentAdapter, StatisticsAdapter, StatisticsOverviewAdapter } from '../adapter';
import type { CostDto, StatisticsOverviewBestRevenueMonthDto, StatisticsOverviewEventPerformanceDto, StatisticsOverviewKPIsDto, StatisticsTrendDto } from '../dto';

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

    async getRevenueAnalysis(merchantId: string): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/overview/revenue-analysis`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
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
}
