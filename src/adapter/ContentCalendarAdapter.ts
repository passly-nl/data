import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, FileSystemAdapter } from '#data/adapter';
import { ContentCalendarItemCreatorDto, ContentCalendarItemDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class ContentCalendarAdapter {
    static parseItem(data: ForeignData): ContentCalendarItemDto {
        return new ContentCalendarItemDto(
            data.id,
            data.event_id ?? null,
            data.scheduled_on ? DateTimeAdapter.parseDateTime(data.scheduled_on) : null,
            data.status,
            data.source,
            data.channel ?? null,
            data.content ?? null,
            data.image_suggestion ?? null,
            data.creator ? ContentCalendarAdapter.parseCreator(data.creator) : null,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }

    static parseCreator(data: ForeignData): ContentCalendarItemCreatorDto {
        return new ContentCalendarItemCreatorDto(
            data.id,
            data.first_name,
            data.last_name,
            data.full_name,
            data.initials,
            optional(data.picture, FileSystemAdapter.parsePicture)
        );
    }
}
