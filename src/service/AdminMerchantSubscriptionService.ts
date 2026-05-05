import { BaseResponse, BaseService } from '@basmilius/http-client';
import { SubscriptionAdapter } from '#data/adapter';
import type { MerchantSubscriptionDto, SubscriptionPlanDto } from '#data/dto';
import type { SubscriptionType } from '#data/types';

export class AdminMerchantSubscriptionService extends BaseService {
    async list(merchantId: string): Promise<BaseResponse<{ available: SubscriptionPlanDto[]; active: MerchantSubscriptionDto[]; }>> {
        return await this
            .request(`/admin/merchants/${merchantId}/subscriptions`)
            .method('get')
            .bearerToken()
            .runAdapter((data: any) => ({
                available: (data.available ?? []).map(SubscriptionAdapter.parseSubscriptionPlan),
                active: (data.active ?? []).map(SubscriptionAdapter.parseMerchantSubscription)
            }));
    }

    async activate(merchantId: string, planKey: string): Promise<BaseResponse<MerchantSubscriptionDto>> {
        return await this
            .request(`/admin/merchants/${merchantId}/subscriptions/activate`)
            .method('post')
            .bearerToken()
            .body({plan_key: planKey})
            .runAdapter(SubscriptionAdapter.parseMerchantSubscription);
    }

    async cancel(merchantId: string, type: SubscriptionType): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/admin/merchants/${merchantId}/subscriptions/type/${type}`)
            .method('delete')
            .bearerToken()
            .run();
    }
}
