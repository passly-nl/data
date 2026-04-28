import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class AiChatConversationDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get title(): string | null {
        return this.#title;
    }

    set title(value: string | null) {
        this.#title = value;
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
    #title: string | null;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, title: string | null, createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#title = title;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
