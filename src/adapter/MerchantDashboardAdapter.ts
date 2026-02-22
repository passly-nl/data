import { adapter } from '@basmilius/http-client';
import { DateTimeAdapter, FileSystemAdapter } from '#data/adapter';
import { MerchantDashboardKeyMetricsDto, MerchantDashboardUpcomingEventDto } from '#data/dto';

@adapter
export class MerchantDashboardAdapter {
    static parseKeyMetricsFromObject(keyMetrics: Record<string, any>): MerchantDashboardKeyMetricsDto {
        return new MerchantDashboardKeyMetricsDto(
            keyMetrics.revenue,
            keyMetrics.tickets,
            keyMetrics.events,
            keyMetrics.tasks
        );
    }

    static parseUpcomingEventFromObject(event: Record<string, any>): MerchantDashboardUpcomingEventDto {
        return new MerchantDashboardUpcomingEventDto(
            event.id,
            event.name,
            event.description,
            FileSystemAdapter.parsePictureFromObject(event.header_file),
            event.status,
            DateTimeAdapter.parseDateTimeFromString(event.starts_on),
            event.tickets_sold,
            event.tickets_total,
            event.sell_through_rate
        );
    }
}
