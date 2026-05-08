import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { DiscountCodeAdapter } from '#data/adapter';
import type { DiscountCodeDto } from '#data/dto';
import type { DiscountCodeType } from '#data/types';

export class MerchantDiscountCodesService extends BaseService {
    async get(merchantId: string, offset: number, limit: number, eventId: string | null = null): Promise<BaseResponse<Paginated<DiscountCodeDto>>> {
        const qs = QueryString.builder()
            .append('language', 'nl')
            .append('offset', offset)
            .append('limit', limit);

        if (eventId !== null) {
            qs.append('event_id', eventId);
        }

        return await this
            .request(`/merchants/${merchantId}/discount-codes`)
            .method('get')
            .bearerToken()
            .queryString(qs)
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
