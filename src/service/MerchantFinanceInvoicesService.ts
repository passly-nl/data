import { BaseResponse, BaseService, Paginated } from '@basmilius/http-client';
import { FinanceAdapter } from '#data/adapter';
import type { InvoiceDto } from '#data/dto';
import type { ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantFinanceInvoicesService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<InvoiceDto>>> {
        return await this
            .request(`/merchants/${merchantId}/finance/invoices`)
            .method('get')
            .bearerToken()
            .queryString(buildListQuery(params))
            .runPaginatedAdapter(FinanceAdapter.parseInvoice);
    }
}
