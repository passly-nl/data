import { BaseResponse, BaseService, BlobResponse, QueryString } from '@basmilius/http-client';
import { FinanceAdapter } from '#data/adapter';
import type { InvoiceDto } from '#data/dto';

export class MerchantFinanceInvoiceService extends BaseService {
    async get(merchantId: string, invoiceId: string): Promise<BaseResponse<InvoiceDto>> {
        return await this
            .request(`/merchants/${merchantId}/finance/invoices/${invoiceId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(FinanceAdapter.parseInvoice);
    }

    async getPDF(merchantId: string, invoiceId: string): Promise<BlobResponse> {
        return await this
            .request(`/merchants/${merchantId}/finance/invoices/${invoiceId}/pdf`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .fetchBlob();
    }
}
