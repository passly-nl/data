import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { FinanceAdapter } from '../adapter';
import type { InvoiceDto } from '../dto';

export class MerchantFinanceInvoicesService extends BaseService {
    async get(merchantId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<InvoiceDto>>> {
        return await this
            .request(`/merchants/${merchantId}/finance/invoices`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .runPaginatedAdapter(FinanceAdapter.parseInvoice);
    }
}
