import type { ForeignData } from '@basmilius/http-client';
import type { AiGenerationStatus } from '#data/types';

export type AiChatMessageCompletedMessageDto = {
    readonly conversation_id: string;
    readonly status: AiGenerationStatus;
    readonly message?: ForeignData;
    readonly reason?: string;
};
