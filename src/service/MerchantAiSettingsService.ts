import { BaseResponse, BaseService } from '@basmilius/http-client';

export class MerchantAiSettingsService extends BaseService {
    async put(merchantId: string, settings: {
        aiBrandVoice: string | null;
    }): Promise<BaseResponse<{ ai_brand_voice: string | null }>> {
        return await this
            .request(`/merchants/${merchantId}/ai/settings`)
            .method('put')
            .bearerToken()
            .body({
                ai_brand_voice: settings.aiBrandVoice
            })
            .run();
    }
}
