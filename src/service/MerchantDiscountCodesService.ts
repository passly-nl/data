import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { DiscountCodeAdapter } from '#data/adapter';
import type { DiscountCodeDto } from '#data/dto';
import type { DiscountCodeType, ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantDiscountCodesService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<DiscountCodeDto>>> {
        return await this
            .request(`/merchants/${merchantId}/discount-codes`)
            .method('get')
            .bearerToken()
            .queryString(buildListQuery(params))
            .runPaginatedAdapter(DiscountCodeAdapter.parseDiscountCode);
    }

    async post(merchantId: string, code: string, type: DiscountCodeType, validFrom: DateTime, validUntil: DateTime, percentage: number | null, amountCents: number | null, maxUses: number | null, eventId: string | null): Promise<BaseResponse<DiscountCodeDto>> {
        return await this
            .request(`/merchants/${merchantId}/discount-codes`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                code,
                type,
                valid_from: validFrom.toISO(),
                valid_until: validUntil.toISO(),
                percentage,
                amount_cents: amountCents,
                max_uses: maxUses,
                event_id: eventId
            })
            .runAdapter(DiscountCodeAdapter.parseDiscountCode);
    }
}
