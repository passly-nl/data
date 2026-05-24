import { adapter, type ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter, StatisticsAdapter } from '#data/adapter';
import { MilestoneDto, StatisticsGrowthCmgrDto, StatisticsGrowthOverviewDto } from '#data/dto';

@adapter
export class StatisticsGrowthAdapter {
    static parseOverview(data: ForeignData): StatisticsGrowthOverviewDto {
        return new StatisticsGrowthOverviewDto(
            StatisticsAdapter.parseTrend(data.revenue, PaymentAdapter.parseCost),
            StatisticsAdapter.parseTrend(data.tickets, Number),
            StatisticsAdapter.parseTrend(data.buyers, Number),
            StatisticsAdapter.parseTrend(data.events, Number),
            StatisticsAdapter.parseTrend(data.average_event_size, Number)
        );
    }

    static parseMilestone(data: ForeignData): MilestoneDto {
        return new MilestoneDto(
            data.id,
            data.type,
            StatisticsGrowthAdapter.parseFiniteNumber(data.threshold),
            StatisticsGrowthAdapter.parseFiniteNumber(data.value),
            data.reference_class ?? null,
            data.reference_id ?? null,
            DateTimeAdapter.parseDateTime(data.achieved_on)
        );
    }

    static parseCmgr(data: ForeignData): StatisticsGrowthCmgrDto {
        return new StatisticsGrowthCmgrDto(
            data.revenue_cmgr,
            data.tickets_cmgr,
            data.months_observed
        );
    }

    private static parseFiniteNumber(value: unknown): number | null {
        if (value === null || value === undefined) {
            return null;
        }

        const parsed = Number(value);

        return Number.isFinite(parsed) ? parsed : null;
    }
}
