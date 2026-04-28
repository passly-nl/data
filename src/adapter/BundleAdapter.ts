import { adapter, ForeignData } from '@basmilius/http-client';
import { PaymentAdapter } from '#data/adapter';
import { BundleDto, BundleQuotaPreviewDto } from '#data/dto';
import type { ContractFeature } from '#data/types';

@adapter
export class BundleAdapter {
    static parseBundle(data: ForeignData): BundleDto {
        return new BundleDto(
            data.key,
            data.label,
            (data.features ?? []) as ContractFeature[],
            data.quota != null ? BundleAdapter.parseQuota(data.quota) : null,
            PaymentAdapter.parseCost(data.price_monthly)
        );
    }

    static parseQuota(data: ForeignData): BundleQuotaPreviewDto {
        return new BundleQuotaPreviewDto(
            data.limit_tokens != null ? Number(data.limit_tokens) : null
        );
    }
}
