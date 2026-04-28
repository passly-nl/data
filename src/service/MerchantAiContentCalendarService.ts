import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { AiContentCalendarAdapter } from '#data/adapter';
import type { AiContentCalendarItemDto } from '#data/dto';

export type AiContentCalendarItemPayload = {
    readonly eventId?: string | null;
    readonly scheduledOn: string;
    readonly status?: string;
    readonly channelHint?: string | null;
    readonly copyText?: string | null;
    readonly imagePrompt?: string | null;
};

export class MerchantAiContentCalendarService extends BaseService {
    async list(merchantId: string, params?: {
        eventId?: string;
        from?: string;
        to?: string
    }): Promise<BaseResponse<{ items: AiContentCalendarItemDto[] }>> {
        const qs = QueryString.builder();

        if (params?.eventId) {
            qs.append('eventId', params.eventId);
        }

        if (params?.from) {
            qs.append('from', params.from);
        }

        if (params?.to) {
            qs.append('to', params.to);
        }

        return await this
            .request(`/merchants/${merchantId}/content-calendar`)
            .method('get')
            .queryString(qs)
            .bearerToken()
            .runAdapter((data: any) => ({
                items: (data.items ?? []).map(AiContentCalendarAdapter.parseItem)
            }));
    }

    async create(merchantId: string, payload: AiContentCalendarItemPayload): Promise<BaseResponse<AiContentCalendarItemDto>> {
        return await this
            .request(`/merchants/${merchantId}/content-calendar`)
            .method('post')
            .bearerToken()
            .body({
                event_id: payload.eventId,
                scheduled_on: payload.scheduledOn,
                status: payload.status,
                channel_hint: payload.channelHint,
                copy_text: payload.copyText,
                image_prompt: payload.imagePrompt
            })
            .runAdapter(AiContentCalendarAdapter.parseItem);
    }

    async update(merchantId: string, itemId: string, payload: Partial<AiContentCalendarItemPayload>): Promise<BaseResponse<AiContentCalendarItemDto>> {
        return await this
            .request(`/merchants/${merchantId}/content-calendar/${itemId}`)
            .method('patch')
            .bearerToken()
            .body({
                scheduled_on: payload.scheduledOn,
                status: payload.status,
                channel_hint: payload.channelHint,
                copy_text: payload.copyText,
                image_prompt: payload.imagePrompt
            })
            .runAdapter(AiContentCalendarAdapter.parseItem);
    }

    async delete(merchantId: string, itemId: string): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/merchants/${merchantId}/content-calendar/${itemId}`)
            .method('delete')
            .bearerToken()
            .run();
    }

    async generate(merchantId: string, options?: {
        eventId?: string;
        additionalInstructions?: string | null;
    }): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/merchants/${merchantId}/content-calendar/generate`)
            .method('post')
            .bearerToken()
            .body({
                event_id: options?.eventId ?? null,
                additional_instructions: options?.additionalInstructions ?? null
            })
            .run();
    }

    async generateText(merchantId: string, options: {
        eventId?: string | null;
        channel?: string | null;
        scheduledOn?: string | null;
        copyText?: string | null;
        additionalInstructions?: string | null;
    }): Promise<BaseResponse<{ copyText: string; imagePrompt: string | null }>> {
        return await this
            .request(`/merchants/${merchantId}/content-calendar/generate-text`)
            .method('post')
            .bearerToken()
            .body({
                event_id: options.eventId ?? null,
                channel: options.channel ?? null,
                scheduled_on: options.scheduledOn ?? null,
                copy_text: options.copyText ?? null,
                additional_instructions: options.additionalInstructions ?? null
            })
            .runAdapter((data: any) => ({
                copyText: String(data.copy_text ?? ''),
                imagePrompt: data.image_prompt ?? null
            }));
    }
}
