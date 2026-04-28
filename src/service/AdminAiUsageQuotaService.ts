import { BaseResponse, BaseService } from '@basmilius/http-client';
import { AiUsageAdapter } from '#data/adapter';
import type { AiUsageQuotaDto } from '#data/dto';

export class AdminAiUsageQuotaService extends BaseService {
    async getQuotas(merchantId: string): Promise<BaseResponse<AiUsageQuotaDto[]>> {
        return await this
            .request(`/admin/merchants/${merchantId}/ai-quotas`)
            .method('get')
            .bearerToken()
            .runArrayAdapter(AiUsageAdapter.parseAiUsageQuota);
    }

    async putQuota(merchantId: string, quota: AiUsageQuotaInput): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/admin/merchants/${merchantId}/ai-quotas`)
            .method('put')
            .bearerToken()
            .body({
                limit_tokens: quota.limitTokens,
                note: quota.note ?? null
            })
            .run();
    }
}

export type AiUsageQuotaInput = {
    readonly limitTokens: number | null;
    readonly note?: string | null;
};
