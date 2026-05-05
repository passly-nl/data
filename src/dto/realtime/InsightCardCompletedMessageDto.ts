import type { ForeignData } from '@basmilius/http-client';
import type { AiGenerationStatus, InsightCardType } from '#data/types';

export type InsightCardCompletedMessageDto = {
    readonly card_type: InsightCardType;
    readonly status: AiGenerationStatus;
    readonly insight?: ForeignData;
    readonly reason?: string;
};
