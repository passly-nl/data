import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
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
            .runAdapter(ProductAdapter.parseProductFromObject);
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
            .runAdapter(r => r);
    }

    async patch(merchantId: string, eventId: string, productId: string, product: ProductDto): Promise<BaseResponse<ProductDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/${productId}`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name: product.name,
                description: product.description,
                price: product.price.cents,
                max_quantity: product.maxQuantity,
                is_swappable: product.isSwappable
            })
            .runAdapter(ProductAdapter.parseProductFromObject);
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
