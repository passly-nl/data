import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { CommonAdapter, DiscountCodeAdapter } from '#data/adapter';
import type { DiscountCodeDto, StatusResponseDto } from '#data/dto';

export class MerchantDiscountCodeService extends BaseService {
    async get(merchantId: string, discountCodeId: string): Promise<BaseResponse<DiscountCodeDto>> {
        return await this
            .request(`/merchants/${merchantId}/discount-codes/${discountCodeId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(DiscountCodeAdapter.parseDiscountCode);
    }

    async put(merchantId: string, discountCodeId: string, validFrom: DateTime, validUntil: DateTime, unlimitedUses: boolean, maxUses: number | null): Promise<BaseResponse<DiscountCodeDto>> {
        return await this
            .request(`/merchants/${merchantId}/discount-codes/${discountCodeId}`)
            .method('put')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                valid_from: validFrom.toISO(),
                valid_until: validUntil.toISO(),
                unlimited_uses: unlimitedUses,
                max_uses: maxUses
            })
            .runAdapter(DiscountCodeAdapter.parseDiscountCode);
    }

    async delete(merchantId: string, discountCodeId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/discount-codes/${discountCodeId}`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }
}
