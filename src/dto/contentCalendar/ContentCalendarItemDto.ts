import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { ContentCalendarItemChannel, ContentCalendarItemSource, ContentCalendarItemStatus } from '#data/types';
import type { ContentCalendarItemCreatorDto } from './ContentCalendarItemCreatorDto';

@dto
export class ContentCalendarItemDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get eventId(): string | null {
        return this.#eventId;
    }

    set eventId(value: string | null) {
        this.#eventId = value;
    }

    get scheduledOn(): DateTime | null {
        return this.#scheduledOn;
    }

    set scheduledOn(value: DateTime | null) {
        this.#scheduledOn = value;
    }

    get status(): ContentCalendarItemStatus {
        return this.#status;
    }

    set status(value: ContentCalendarItemStatus) {
        this.#status = value;
    }

    get source(): ContentCalendarItemSource {
        return this.#source;
    }

    set source(value: ContentCalendarItemSource) {
        this.#source = value;
    }

    get channel(): ContentCalendarItemChannel | null {
        return this.#channel;
    }

    set channel(value: ContentCalendarItemChannel | null) {
        this.#channel = value;
    }

    get content(): string | null {
        return this.#content;
    }

    set content(value: string | null) {
        this.#content = value;
    }

    get imageSuggestion(): string | null {
        return this.#imageSuggestion;
    }

    set imageSuggestion(value: string | null) {
        this.#imageSuggestion = value;
    }

    get creator(): ContentCalendarItemCreatorDto | null {
        return this.#creator;
    }

    set creator(value: ContentCalendarItemCreatorDto | null) {
        this.#creator = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get updatedOn(): DateTime {
        return this.#updatedOn;
    }

    set updatedOn(value: DateTime) {
        this.#updatedOn = value;
    }

    #id: string;
    #eventId: string | null;
    #scheduledOn: DateTime | null;
    #status: ContentCalendarItemStatus;
    #source: ContentCalendarItemSource;
    #channel: ContentCalendarItemChannel | null;
    #content: string | null;
    #imageSuggestion: string | null;
    #creator: ContentCalendarItemCreatorDto | null;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(
        id: string,
        eventId: string | null,
        scheduledOn: DateTime | null,
        status: ContentCalendarItemStatus,
        source: ContentCalendarItemSource,
        channel: ContentCalendarItemChannel | null,
        content: string | null,
        imageSuggestion: string | null,
        creator: ContentCalendarItemCreatorDto | null,
        createdOn: DateTime,
        updatedOn: DateTime
    ) {
        this.#id = id;
        this.#eventId = eventId;
        this.#scheduledOn = scheduledOn;
        this.#status = status;
        this.#source = source;
        this.#channel = channel;
        this.#content = content;
        this.#imageSuggestion = imageSuggestion;
        this.#creator = creator;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
