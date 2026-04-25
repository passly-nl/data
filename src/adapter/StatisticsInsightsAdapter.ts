import { adapter, ForeignData } from '@basmilius/http-client';
import { InsightDto, InsightSignalDto, InsightsResponseDto } from '#data/dto';
import type { InsightCardType, InsightLanguage, InsightSignalKind, InsightStatus } from '#data/types';

@adapter
export class StatisticsInsightsAdapter {
    static parseInsight(data: ForeignData): InsightDto {
        return new InsightDto(
            data.id,
            data.card_type as InsightCardType,
            data.language as InsightLanguage,
            data.period_from,
            data.period_to,
            data.status as InsightStatus,
            data.title ?? null,
            data.body_md ?? null,
            data.signals
                ? data.signals.map((signal: ForeignData) => StatisticsInsightsAdapter.parseSignal(signal))
                : null,
            data.payload ?? null,
            data.generated_on ?? null,
            !!data.is_stale
        );
    }

    static parseInsightsResponse(data: ForeignData): InsightsResponseDto {
        return new InsightsResponseDto(
            !!data.insights_enabled,
            data.language as InsightLanguage,
            (data.cards ?? []).map((card: ForeignData) => StatisticsInsightsAdapter.parseInsight(card))
        );
    }

    static parseSignal(data: ForeignData): InsightSignalDto {
        return new InsightSignalDto(
            data.kind as InsightSignalKind,
            data.text
        );
    }
}
