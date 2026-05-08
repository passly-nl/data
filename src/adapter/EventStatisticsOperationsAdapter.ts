import { adapter, ForeignData } from '@basmilius/http-client';
import { EventStatisticsAppTeamDto, EventStatisticsAttendanceDto, EventStatisticsOperationsOverviewDto, EventStatisticsSwapsDto } from '#data/dto';

@adapter
export class EventStatisticsOperationsAdapter {
    static parseAppTeam(data: ForeignData): EventStatisticsAppTeamDto {
        return new EventStatisticsAppTeamDto(
            data.id,
            data.name,
            data.scans,
            data.checkins,
            data.checkouts
        );
    }

    static parseAttendance(data: ForeignData): EventStatisticsAttendanceDto {
        return new EventStatisticsAttendanceDto(
            data.attended,
            data.expected,
            data.rate
        );
    }

    static parseOverview(data: ForeignData): EventStatisticsOperationsOverviewDto {
        return new EventStatisticsOperationsOverviewDto(
            data.total_scans,
            data.checkins,
            data.checkouts,
            data.attendance_rate,
            data.app_teams
        );
    }

    static parseSwaps(data: ForeignData): EventStatisticsSwapsDto {
        return new EventStatisticsSwapsDto(
            data.swaps,
            data.tickets,
            data.rate
        );
    }
}
