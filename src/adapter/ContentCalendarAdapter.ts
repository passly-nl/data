import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter } from '#data/adapter';
import { ContentCalendarItemDto } from '#data/dto';

@adapter
export class ContentCalendarAdapter {
    static parseItem(data: ForeignData): ContentCalendarItemDto {
        return new ContentCalendarItemDto(
            data.id,
            data.event_id ?? null,
            DateTimeAdapter.parseDateTime(data.scheduled_on),
            data.status,
            data.source,
            data.channel ?? null,
            data.content ?? null,
            data.image_suggestion ?? null,
            data.insight_id ?? null,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }
}
