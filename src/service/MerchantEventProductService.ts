import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { ProductAdapter } from '#data/adapter';
import type { ProductDto } from '#data/dto';

export class MerchantEventProductService extends BaseService {
    async get(merchantId: string, eventId: string, productId: string): Promise<BaseResponse<ProductDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(ProductAdapter.parseProduct);
    }

    async postImage(merchantId: string, eventId: string, productId: string, picture: File): Promise<BaseResponse<object>> {
        const data = new FormData();
        data.append('file', picture);

        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}/media`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body(data)
            .run();
    }

    async patchGeneral(merchantId: string, eventId: string, productId: string, name: string, description: string | null): Promise<BaseResponse<ProductDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}/general`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name,
                description
            })
            .runAdapter(ProductAdapter.parseProduct);
    }

    async patchSales(merchantId: string, eventId: string, productId: string, price: number, maxQuantity: number, isSwappable: boolean, ticketsReleasedOn: DateTime | null): Promise<BaseResponse<ProductDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}/sales`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                price,
                max_quantity: maxQuantity,
                is_swappable: isSwappable,
                tickets_released_on: ticketsReleasedOn?.toISO() ?? null
            })
            .runAdapter(ProductAdapter.parseProduct);
    }

    async patchValidity(merchantId: string, eventId: string, productId: string, timeSlotIds: string[]): Promise<BaseResponse<ProductDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}/validity`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                time_slot_ids: timeSlotIds
            })
            .runAdapter(ProductAdapter.parseProduct);
    }

    async patchPause(merchantId: string, eventId: string, productId: string): Promise<BaseResponse<never>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}/pause`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runEmpty();
    }

    async patchResume(merchantId: string, eventId: string, productId: string): Promise<BaseResponse<never>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}/resume`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runEmpty();
    }

    async delete(merchantId: string, eventId: string, productId: string): Promise<BaseResponse<never>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runEmpty();
    }
}
