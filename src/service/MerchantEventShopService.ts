import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { EventAdapter } from '../adapter';
import type { ShopDesignDto, ShopDto, ShopElementDto } from '../dto';

export class MerchantEventShopService extends BaseService {
    async get(merchantId: string, eventId: string, shopId: string): Promise<BaseResponse<ShopDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventAdapter.parseShopFromObject);
    }

    async getElements(merchantId: string, eventId: string, shopId: string): Promise<BaseResponse<ShopElementDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/elements`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(EventAdapter.parseShopElementFromObject);
    }

    async patch(merchantId: string, eventId: string, shop: ShopDto): Promise<BaseResponse<ShopDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shop.id}`)
            .method('patch')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .body({
                name: shop.name,
                is_published: shop.isPublished,
                starts_on: shop.startsOn,
                ends_on: shop.endsOn,
                password: shop.password
            })
            .runAdapter(EventAdapter.parseShopFromObject);
    }

    async patchDesign(merchantId: string, eventId: string, shopId: string, design: ShopDesignDto): Promise<BaseResponse<ShopDesignDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/design`)
            .method('patch')
            .bearerToken()
            .body({
                background_color: design.backgroundColor,
                foreground_color: design.foregroundColor,
                primary_color: design.primaryColor
            })
            .runAdapter(EventAdapter.parseShopDesignFromObject);
    }

    async patchElements(merchantId: string, eventId: string, shopId: string, elements: object[]): Promise<BaseResponse<ShopElementDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/elements`)
            .method('patch')
            .bearerToken()
            .body({
                elements
            })
            .runArrayAdapter(EventAdapter.parseShopElementFromObject);
    }
}
