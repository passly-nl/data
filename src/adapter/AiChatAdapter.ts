import { adapter, ForeignData } from '@basmilius/http-client';
import { AuthAdapter, DateTimeAdapter } from '#data/adapter';
import { AiChatConversationDto, AiChatMessageDto, AiChatToolCallDto } from '#data/dto';
import { optional, optionalArray } from '#data/util';

@adapter
export class AiChatAdapter {
    static parseConversation(data: ForeignData): AiChatConversationDto {
        return new AiChatConversationDto(
            data.id,
            data.title ?? null,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }

    static parseMessage(data: ForeignData): AiChatMessageDto {
        return new AiChatMessageDto(
            data.id,
            data.role,
            data.content ?? null,
            optionalArray(data.tool_calls, AiChatAdapter.parseToolCall),
            optional(data.creator, AuthAdapter.parseUser),
            DateTimeAdapter.parseDateTime(data.generated_on)
        );
    }

    static parseToolCall(data: ForeignData): AiChatToolCallDto {
        return new AiChatToolCallDto(
            data.id ?? '',
            data.name,
            data.input ?? {},
            data.output ?? null,
            !!data.is_error
        );
    }
}
