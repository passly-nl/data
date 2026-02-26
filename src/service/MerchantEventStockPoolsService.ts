import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { FluxFormSelectEntry } from '@flux-ui/types';
import { EventAdapter, FluxAdapter } from '#data/adapter';
import type { StockOverviewDto, StockPoolDto } from '#data/dto';

export class MerchantEventStockPoolsService extends BaseService {
    async get(merchantId: string, eventId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<StockPoolDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/stock-pools`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
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
