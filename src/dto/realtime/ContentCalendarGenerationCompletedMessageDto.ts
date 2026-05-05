import type { AiGenerationStatus } from '#data/types';

export type ContentCalendarGenerationCompletedMessageDto = {
    readonly event_id: string;
    readonly status: AiGenerationStatus;
    readonly count?: number;
    readonly reason?: string;
};
