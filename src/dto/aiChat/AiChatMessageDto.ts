import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { UserDto } from '#data/dto';
import type { AiChatToolCallDto } from './AiChatToolCallDto';

export type AiChatMessageRole = 'user' | 'assistant' | 'system' | 'tool';

@dto
export class AiChatMessageDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get role(): AiChatMessageRole {
        return this.#role;
    }

    set role(value: AiChatMessageRole) {
        this.#role = value;
    }

    get content(): string | null {
        return this.#content;
    }

    set content(value: string | null) {
        this.#content = value;
    }

    get toolCalls(): AiChatToolCallDto[] | null {
        return this.#toolCalls;
    }

    set toolCalls(value: AiChatToolCallDto[] | null) {
        this.#toolCalls = value;
    }

    get creator(): UserDto | null {
        return this.#creator;
    }

    set creator(value: UserDto | null) {
        this.#creator = value;
    }

    get generatedOn(): DateTime {
        return this.#generatedOn;
    }

    set generatedOn(value: DateTime) {
        this.#generatedOn = value;
    }

    #id: string;
    #role: AiChatMessageRole;
    #content: string | null;
    #toolCalls: AiChatToolCallDto[] | null;
    #creator: UserDto | null;
    #generatedOn: DateTime;

    constructor(id: string, role: AiChatMessageRole, content: string | null, toolCalls: AiChatToolCallDto[] | null, creator: UserDto | null, generatedOn: DateTime) {
        this.#id = id;
        this.#role = role;
        this.#content = content;
        this.#toolCalls = toolCalls;
        this.#creator = creator;
        this.#generatedOn = generatedOn;
    }
}
