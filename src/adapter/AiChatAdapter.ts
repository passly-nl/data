import { adapter, ForeignData } from '@basmilius/http-client';
import { AuthAdapter, DateTimeAdapter } from '#data/adapter';
import type { AiChatMessageRole } from '#data/dto';
import { AiChatConversationDto, AiChatMessageDto, AiChatToolCallDto } from '#data/dto';

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
            data.role as AiChatMessageRole,
            data.content ?? null,
            data.tool_calls
                ? (data.tool_calls as ForeignData[]).map((call: ForeignData) => AiChatAdapter.parseToolCall(call))
                : null,
            data.creator ? AuthAdapter.parseUser(data.creator) : null,
            DateTimeAdapter.parseDateTime(data.generated_on)
        );
    }

    static parseToolCall(data: ForeignData): AiChatToolCallDto {
        return new AiChatToolCallDto(
            data.id ?? '',
            data.name,
            (data.input ?? {}) as Record<string, unknown>,
            data.output ?? null,
            !!data.is_error
        );
    }
}
