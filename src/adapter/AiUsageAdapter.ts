import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter } from '#data/adapter';
import { AiUsageDto, AiUsageFeatureStatusDto, AiUsagePeriodDto } from '#data/dto';
import { optional, optionalArray } from '#data/util';

@adapter
export class AiUsageAdapter {
    static parseAiUsage(data: ForeignData): AiUsageDto {
        return new AiUsageDto(
            data.id,
            data.feature,
            data.operation,
            data.model,
            data.prompt_tokens ?? 0,
            data.cached_tokens ?? 0,
            data.output_tokens ?? 0,
            data.reference_class ?? null,
            data.reference_id ?? null,
            DateTimeAdapter.parseDateTime(data.created_on)
        );
    }

    static parseAiUsagePeriod(data: ForeignData): AiUsagePeriodDto {
        return new AiUsagePeriodDto(
            optional(data.period_start, DateTimeAdapter.parseDateTime),
            optional(data.period_end, DateTimeAdapter.parseDateTime),
            data.tokens_used ?? 0,
            data.limit_tokens ?? null,
            data.percentage ?? 0,
            optional(data.last_event_on, DateTimeAdapter.parseDateTime),
            optionalArray(data.features, AiUsageAdapter.parseAiUsageFeatureStatus)
        );
    }

    static parseAiUsageFeatureStatus(data: ForeignData): AiUsageFeatureStatusDto {
        return new AiUsageFeatureStatusDto(
            data.feature,
            !!data.enabled,
            data.tokens_used ?? 0
        );
    }
}
