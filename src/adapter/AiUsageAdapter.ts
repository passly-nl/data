import { adapter, ForeignData } from '@basmilius/http-client';
import { AiUsageDto, AiUsageFeatureStatusDto, AiUsagePeriodDto, AiUsageQuotaDto } from '#data/dto';
import type { ContractFeature } from '#data/types';

@adapter
export class AiUsageAdapter {
    static parseAiUsage(data: ForeignData): AiUsageDto {
        return new AiUsageDto(
            data.id,
            data.feature as ContractFeature,
            data.operation,
            data.model,
            Number(data.prompt_tokens ?? 0),
            Number(data.cached_tokens ?? 0),
            Number(data.output_tokens ?? 0),
            data.reference_class ?? null,
            data.reference_id ?? null,
            data.created_on
        );
    }

    static parseAiUsagePeriod(data: ForeignData): AiUsagePeriodDto {
        return new AiUsagePeriodDto(
            data.period_start ?? null,
            data.period_end ?? null,
            Number(data.tokens_used ?? 0),
            data.limit_tokens != null ? Number(data.limit_tokens) : null,
            Number(data.percentage ?? 0),
            data.last_event_on ?? null,
            (data.features ?? []).map((feature: ForeignData) => AiUsageAdapter.parseAiUsageFeatureStatus(feature))
        );
    }

    static parseAiUsageFeatureStatus(data: ForeignData): AiUsageFeatureStatusDto {
        return new AiUsageFeatureStatusDto(
            data.feature as ContractFeature,
            !!data.enabled
        );
    }

    static parseAiUsageQuota(data: ForeignData): AiUsageQuotaDto {
        return new AiUsageQuotaDto(
            data.contract_id,
            data.bundle_key ?? null,
            data.limit_tokens != null ? Number(data.limit_tokens) : null,
            data.note ?? null
        );
    }
}
