import { adapter, type ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter } from '#data/adapter';
import { StatisticsOperationsAppTeamDto, StatisticsOperationsNoShowRateDto, StatisticsOperationsNoShowRateEventDto, StatisticsOperationsOverviewDto, StatisticsOperationsScanTimeDistributionDto, StatisticsOperationsStewardDto, StatisticsOperationsStockUtilizationDto } from '#data/dto';

@adapter
export class StatisticsOperationsAdapter {
    static parseOverview(data: ForeignData): StatisticsOperationsOverviewDto {
        return new StatisticsOperationsOverviewDto(
            data.total_scans,
            data.checkins,
            data.checkouts,
            data.attendance_rate,
            data.live_events
        );
    }

    static parseAppTeam(data: ForeignData): StatisticsOperationsAppTeamDto {
        return new StatisticsOperationsAppTeamDto(
            data.id,
            data.name,
            data.event_id,
            data.event_name,
            data.scans,
            data.checkins,
            data.checkouts
        );
    }

    static parseNoShowRate(data: ForeignData): StatisticsOperationsNoShowRateDto {
        return new StatisticsOperationsNoShowRateDto(
            data.valid_tickets,
            data.checked_in,
            data.no_shows,
            data.no_show_rate,
            data.events.map(StatisticsOperationsAdapter.parseNoShowRateEvent)
        );
    }

    static parseNoShowRateEvent(data: ForeignData): StatisticsOperationsNoShowRateEventDto {
        return new StatisticsOperationsNoShowRateEventDto(
            data.id,
            data.name,
            data.no_show_rate,
            data.no_shows,
            data.tickets_sold
        );
    }

    static parseScanTimeDistribution(data: ForeignData): StatisticsOperationsScanTimeDistributionDto {
        return new StatisticsOperationsScanTimeDistributionDto(
            data.buckets,
            data.median_minutes_relative
        );
    }

    static parseSteward(data: ForeignData): StatisticsOperationsStewardDto {
        return new StatisticsOperationsStewardDto(
            data.user.id,
            data.user.full_name,
            data.user.initials,
            data.scans,
            data.checkins,
            data.checkouts
        );
    }

    static parseStockUtilization(data: ForeignData): StatisticsOperationsStockUtilizationDto {
        return new StatisticsOperationsStockUtilizationDto(
            data.product_id,
            data.product_name,
            PaymentAdapter.parseCost(data.product_price),
            data.event_id,
            data.event_name,
            DateTimeAdapter.parseDateTime(data.event_starts_on),
            data.stock,
            data.sold,
            data.utilization_rate
        );
    }
}
