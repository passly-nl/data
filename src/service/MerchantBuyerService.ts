import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { BuyerAdapter, OrderAdapter } from '#data/adapter';
import type { BuyerDto, OrderDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantBuyerService extends BaseService {
    async get(merchantId: string, buyerId: string): Promise<BaseResponse<BuyerDto>> {
        return await this
            .request(`/merchants/${merchantId}/buyers/${buyerId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(BuyerAdapter.parseBuyer);
    }

    async getOrder(merchantId: string, buyerId: string, orderId: string): Promise<BaseResponse<OrderDto>> {
        return await this
            .request(`/merchants/${merchantId}/buyers/${buyerId}/orders/${orderId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(OrderAdapter.parseOrder);
    }

    async getOrders(merchantId: string, buyerId: string, params: ListParams): Promise<BaseResponse<Paginated<OrderDto>>> {
        return await this
            .request(`/merchants/${merchantId}/buyers/${buyerId}/orders`)
            .method('get')
            .bearerToken()
            .queryString(buildListQuery(params))
            .runPaginatedAdapter(OrderAdapter.parseOrder);
    }
}
