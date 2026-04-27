import { adapter, type ForeignData } from '@basmilius/http-client';
import { StatisticsOperationsAppTeamDto, StatisticsOperationsOverviewDto, StatisticsOperationsTaskAssigneeDto, StatisticsOperationsTasksOverviewDto } from '#data/dto';

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

    static parseTasksOverview(data: ForeignData): StatisticsOperationsTasksOverviewDto {
        return new StatisticsOperationsTasksOverviewDto(
            data.open,
            data.in_progress,
            data.resolved,
            data.canceled,
            data.average_resolve_time_seconds,
            data.top_assignees.map(StatisticsOperationsAdapter.parseTaskAssignee)
        );
    }

    static parseTaskAssignee(data: ForeignData): StatisticsOperationsTaskAssigneeDto {
        return new StatisticsOperationsTaskAssigneeDto(
            data.user.id,
            data.user.full_name,
            data.user.initials,
            data.resolved_count
        );
    }
}
