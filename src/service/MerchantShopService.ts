import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { EventAdapter, PublicShopAdapter } from '#data/adapter';
import type { PublicShopDto, ShopDto, ShopElementDto } from '#data/dto';

export class MerchantShopService extends BaseService {
    async get(merchantId: string, shopId: string): Promise<BaseResponse<ShopDto>> {
        return await this
            .request(`/merchants/${merchantId}/shops/${shopId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventAdapter.parseShop);
    }

    async getElements(merchantId: string, shopId: string): Promise<BaseResponse<ShopElementDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/shops/${shopId}/elements`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(EventAdapter.parseShopElement);
    }

    async getPreview(merchantId: string, shopId: string): Promise<BaseResponse<PublicShopDto>> {
        return await this
            .request(`/merchants/${merchantId}/shops/${shopId}/preview`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(PublicShopAdapter.parsePublicShop);
    }
}
