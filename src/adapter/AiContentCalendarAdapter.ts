import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter } from '#data/adapter';
import type { AiContentCalendarItemSource, AiContentCalendarItemStatus } from '#data/dto';
import { AiContentCalendarItemDto } from '#data/dto';

@adapter
export class AiContentCalendarAdapter {
    static parseItem(data: ForeignData): AiContentCalendarItemDto {
        return new AiContentCalendarItemDto(
            data.id,
            data.event_id ?? null,
            DateTimeAdapter.parseDateTime(data.scheduled_on),
            data.status as AiContentCalendarItemStatus,
            data.source as AiContentCalendarItemSource,
            data.channel_hint ?? null,
            data.copy_text ?? null,
            data.image_prompt ?? null,
            data.insight_id ?? null,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }
}
