import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, FileSystemAdapter } from '../adapter';
import { MerchantDashboardKeyMetricsDto, MerchantDashboardUpcomingEventDto } from '../dto';

@adapter
export class MerchantDashboardAdapter {
    static parseKeyMetrics(data: ForeignData): MerchantDashboardKeyMetricsDto {
        return new MerchantDashboardKeyMetricsDto(
            data.revenue,
            data.tickets,
            data.events,
            data.tasks
        );
    }

    static parseUpcomingEvent(data: ForeignData): MerchantDashboardUpcomingEventDto {
        return new MerchantDashboardUpcomingEventDto(
            data.id,
            data.name,
            data.description,
            FileSystemAdapter.parsePicture(data.header_file),
            data.status,
            DateTimeAdapter.parseDateTime(data.starts_on),
            data.tickets_sold,
            data.tickets_total,
            data.sell_through_rate
        );
    }
}
