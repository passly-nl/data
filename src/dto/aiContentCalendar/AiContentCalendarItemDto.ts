import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

export type AiContentCalendarItemStatus = 'draft' | 'scheduled' | 'published' | 'archived';
export type AiContentCalendarItemSource = 'manual' | 'ai' | 'insight';

@dto
export class AiContentCalendarItemDto {
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

    get scheduledOn(): DateTime {
        return this.#scheduledOn;
    }

    set scheduledOn(value: DateTime) {
        this.#scheduledOn = value;
    }

    get status(): AiContentCalendarItemStatus {
        return this.#status;
    }

    set status(value: AiContentCalendarItemStatus) {
        this.#status = value;
    }

    get source(): AiContentCalendarItemSource {
        return this.#source;
    }

    set source(value: AiContentCalendarItemSource) {
        this.#source = value;
    }

    get channelHint(): string | null {
        return this.#channelHint;
    }

    set channelHint(value: string | null) {
        this.#channelHint = value;
    }

    get copyText(): string | null {
        return this.#copyText;
    }

    set copyText(value: string | null) {
        this.#copyText = value;
    }

    get imagePrompt(): string | null {
        return this.#imagePrompt;
    }

    set imagePrompt(value: string | null) {
        this.#imagePrompt = value;
    }

    get insightId(): string | null {
        return this.#insightId;
    }

    set insightId(value: string | null) {
        this.#insightId = value;
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
    #scheduledOn: DateTime;
    #status: AiContentCalendarItemStatus;
    #source: AiContentCalendarItemSource;
    #channelHint: string | null;
    #copyText: string | null;
    #imagePrompt: string | null;
    #insightId: string | null;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(
        id: string,
        eventId: string | null,
        scheduledOn: DateTime,
        status: AiContentCalendarItemStatus,
        source: AiContentCalendarItemSource,
        channelHint: string | null,
        copyText: string | null,
        imagePrompt: string | null,
        insightId: string | null,
        createdOn: DateTime,
        updatedOn: DateTime
    ) {
        this.#id = id;
        this.#eventId = eventId;
        this.#scheduledOn = scheduledOn;
        this.#status = status;
        this.#source = source;
        this.#channelHint = channelHint;
        this.#copyText = copyText;
        this.#imagePrompt = imagePrompt;
        this.#insightId = insightId;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
