import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { FluxFormSelectEntry } from '@flux-ui/types';
import { EventAdapter, FluxAdapter } from '#data/adapter';
import type { StockOverviewDto, StockPoolDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantEventStockPoolsService extends BaseService {
    async get(merchantId: string, eventId: string, params: ListParams): Promise<BaseResponse<Paginated<StockPoolDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/stock-pools`)
            .method('get')
            .queryString(buildListQuery(params))
            .bearerToken()
            .runPaginatedAdapter(EventAdapter.parseStockPool);
    }

    async getOverview(merchantId: string, eventId: string): Promise<BaseResponse<StockOverviewDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/stock-pools/overview`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventAdapter.parseStockOverview);
    }

    async getSelectOptions(merchantId: string, eventId: string, searchQuery: string | null = null, ids: string[] | null = null): Promise<BaseResponse<FluxFormSelectEntry[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/stock-pools/select-options`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .appendArray('ids[]', ids)
                .append('searchQuery', searchQuery))
            .bearerToken()
            .runArrayAdapter(FluxAdapter.parseFluxFormSelectEntry);
    }

    async getSingle(merchantId: string, eventId: string, stockPoolId: string): Promise<BaseResponse<StockPoolDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/stock-pools/${stockPoolId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(EventAdapter.parseStockPool);
    }

    async patch(merchantId: string, eventId: string, stockPoolId: string, stock: number): Promise<BaseResponse<StockPoolDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/stock-pools/${stockPoolId}`)
            .method('patch')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                stock
            })
            .runAdapter(EventAdapter.parseStockPool);
    }

    async post(merchantId: string, eventId: string, name: string, stock: number): Promise<BaseResponse<StockPoolDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/stock-pools`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name,
                stock
            })
            .runAdapter(EventAdapter.parseStockPool);
    }
}
