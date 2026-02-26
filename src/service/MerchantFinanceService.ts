import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { FinanceAdapter } from '../adapter';
import type { FinanceOverviewDto } from '../dto';
import type { DailyRevenueChart } from '../types';

export class MerchantFinanceService extends BaseService {
    async getDailyRevenue(merchantId: string): Promise<BaseResponse<DailyRevenueChart>> {
        return await this
            .request(`/merchants/${merchantId}/finance/daily-revenue`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .run();
    }

    async getMonthlyRevenue(merchantId: string): Promise<BaseResponse<DailyRevenueChart>> {
        return await this
            .request(`/merchants/${merchantId}/finance/monthly-revenue`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .run();
    }

    async getOverview(merchantId: string): Promise<BaseResponse<FinanceOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/finance/overview`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(FinanceAdapter.parseFinanceOverview);
    }
}
