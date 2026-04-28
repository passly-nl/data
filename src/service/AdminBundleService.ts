import { BaseResponse, BaseService } from '@basmilius/http-client';
import { BundleAdapter } from '#data/adapter';
import type { BundleDto } from '#data/dto';

export class AdminBundleService extends BaseService {
    async list(merchantId: string): Promise<BaseResponse<{
        available: BundleDto[];
        active: string[];
    }>> {
        return await this
            .request(`/admin/merchants/${merchantId}/bundles`)
            .method('get')
            .bearerToken()
            .runAdapter((data: any) => ({
                available: (data.available ?? []).map(BundleAdapter.parseBundle),
                active: (data.active ?? []) as string[]
            }));
    }

    async activate(merchantId: string, bundleKey: string): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/admin/merchants/${merchantId}/bundles/activate`)
            .method('post')
            .bearerToken()
            .body({bundle_key: bundleKey})
            .run();
    }

    async deactivate(merchantId: string, bundleKey: string): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/admin/merchants/${merchantId}/bundles/${bundleKey}`)
            .method('delete')
            .bearerToken()
            .run();
    }
}
