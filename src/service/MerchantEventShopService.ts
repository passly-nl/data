import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { CommonAdapter, EventAdapter, ShortlinkAdapter } from '#data/adapter';
import type { ShopDesignDto, ShopDto, ShopElementDto, ShortlinkDto, StatusResponseDto } from '#data/dto';

export class MerchantEventShopService extends BaseService {
    async get(merchantId: string, eventId: string, shopId: string): Promise<BaseResponse<ShopDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventAdapter.parseShop);
    }

    async getElements(merchantId: string, eventId: string, shopId: string): Promise<BaseResponse<ShopElementDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/elements`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(EventAdapter.parseShopElement);
    }

    async getShortlink(merchantId: string, eventId: string, shopId: string): Promise<BaseResponse<ShortlinkDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/shortlink`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(ShortlinkAdapter.parse);
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
            .runAdapter(EventAdapter.parseShop);
    }

    async patchDesign(merchantId: string, eventId: string, shopId: string, design: ShopDesignDto): Promise<BaseResponse<ShopDesignDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/design`)
            .method('patch')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .body({
                background_color: design.backgroundColor,
                foreground_color: design.foregroundColor,
                primary_color: design.primaryColor,
                background_scrim: design.backgroundScrim
            })
            .runAdapter(EventAdapter.parseShopDesign);
    }

    async patchElements(merchantId: string, eventId: string, shopId: string, elements: object[]): Promise<BaseResponse<ShopElementDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/elements`)
            .method('patch')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .body({
                elements
            })
            .runArrayAdapter(EventAdapter.parseShopElement);
    }

    async patchFields(merchantId: string, eventId: string, shop: ShopDto): Promise<BaseResponse<ShopDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shop.id}/fields`)
            .method('patch')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .body({
                field_address: shop.fieldAddress,
                field_address_mode: shop.fieldAddressMode,
                field_birthdate: shop.fieldBirthdate,
                field_gender: shop.fieldGender,
                field_phone_number: shop.fieldPhoneNumber
            })
            .runAdapter(EventAdapter.parseShop);
    }

    async postBackground(merchantId: string, eventId: string, shopId: string, picture: File): Promise<BaseResponse<StatusResponseDto>> {
        const data = new FormData();
        data.append('file', picture);

        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/design/background`)
            .method('post')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .body(data)
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async postShortlink(merchantId: string, eventId: string, shopId: string): Promise<BaseResponse<ShortlinkDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/shortlink`)
            .method('post')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(ShortlinkAdapter.parse);
    }

    async deleteBackground(merchantId: string, eventId: string, shopId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/shops/${shopId}/design/background`)
            .method('delete')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(CommonAdapter.parseStatusResponse);
    }
}
