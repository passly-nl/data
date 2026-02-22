import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { FluxFormSelectEntry } from '@flux-ui/types';
import { FluxAdapter, ProductAdapter } from '#data/adapter';
import type { ProductDto } from '#data/dto';

export class MerchantEventProductsService extends BaseService {
    async get(merchantId: string, eventId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<ProductDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .runPaginatedAdapter(ProductAdapter.parseProductFromObject);
    }

    async getSelectOptions(merchantId: string, eventId: string, searchQuery: string | null = null, ids: string[] | null = null): Promise<BaseResponse<FluxFormSelectEntry[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products/select-options`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .appendArray('ids[]', ids)
                .append('searchQuery', searchQuery))
            .runArrayAdapter(FluxAdapter.parseFluxFormSelectEntryFromObject);
    }

    async post(merchantId: string, eventId: string, name: string, description: string, price: number, maxQuantity: number, stock: number | null, stockPoolId: string | null): Promise<BaseResponse<ProductDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/products`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name,
                description,
                price,
                stock,
                max_quantity: maxQuantity,
                stock_pool_id: stockPoolId
            })
            .runAdapter(ProductAdapter.parseProductFromObject);
    }
}
