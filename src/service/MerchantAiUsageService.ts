import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { AiUsageAdapter } from '#data/adapter';
import type { AiUsageDto, AiUsagePeriodDto } from '#data/dto';

export class MerchantAiUsageService extends BaseService {
    async getCurrent(merchantId: string): Promise<BaseResponse<AiUsagePeriodDto>> {
        return await this
            .request(`/merchants/${merchantId}/ai-usage`)
            .method('get')
            .bearerToken()
            .runAdapter(AiUsageAdapter.parseAiUsagePeriod);
    }

    async getHistory(merchantId: string, params?: { feature?: string; limit?: number; }): Promise<BaseResponse<AiUsageDto[]>> {
        const qs = QueryString.builder();

        if (params?.feature) {
            qs.append('feature', params.feature);
        }

        if (params?.limit) {
            qs.append('limit', params.limit);
        }

        return await this
            .request(`/merchants/${merchantId}/ai-usage/history`)
            .method('get')
            .queryString(qs)
            .bearerToken()
            .runArrayAdapter(AiUsageAdapter.parseAiUsage);
    }
}
