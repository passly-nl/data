import { adapter, ForeignData } from '@basmilius/http-client';
import { PaymentAdapter } from '#data/adapter';
import { BundleDto, BundleQuotaPreviewDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class BundleAdapter {
    static parseBundle(data: ForeignData): BundleDto {
        return new BundleDto(
            data.key,
            data.label,
            data.features ?? [],
            optional(data.quota, BundleAdapter.parseQuota),
            PaymentAdapter.parseCost(data.price_monthly)
        );
    }

    static parseQuota(data: ForeignData): BundleQuotaPreviewDto {
        return new BundleQuotaPreviewDto(
            data.limit_tokens ?? null
        );
    }
}
