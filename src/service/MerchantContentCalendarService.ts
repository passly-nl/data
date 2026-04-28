import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { ContentCalendarAdapter } from '#data/adapter';
import type { ContentCalendarItemChannel, ContentCalendarItemDto } from '#data/dto';

export type ContentCalendarItemPayload = {
    readonly eventId?: string | null;
    readonly scheduledOn: string;
    readonly status?: string;
    readonly channel?: ContentCalendarItemChannel | null;
    readonly content?: string | null;
    readonly imageSuggestion?: string | null;
};

export class MerchantContentCalendarService extends BaseService {
    async list(merchantId: string, params?: {
        eventId?: string;
        from?: string;
        to?: string
    }): Promise<BaseResponse<{ items: ContentCalendarItemDto[] }>> {
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
                items: (data.items ?? []).map(ContentCalendarAdapter.parseItem)
            }));
    }

    async create(merchantId: string, payload: ContentCalendarItemPayload): Promise<BaseResponse<ContentCalendarItemDto>> {
        return await this
            .request(`/merchants/${merchantId}/content-calendar`)
            .method('post')
            .bearerToken()
            .body({
                event_id: payload.eventId,
                scheduled_on: payload.scheduledOn,
                status: payload.status,
                channel: payload.channel,
                content: payload.content,
                image_suggestion: payload.imageSuggestion
            })
            .runAdapter(ContentCalendarAdapter.parseItem);
    }

    async update(merchantId: string, itemId: string, payload: Partial<ContentCalendarItemPayload>): Promise<BaseResponse<ContentCalendarItemDto>> {
        return await this
            .request(`/merchants/${merchantId}/content-calendar/${itemId}`)
            .method('patch')
            .bearerToken()
            .body({
                scheduled_on: payload.scheduledOn,
                status: payload.status,
                channel: payload.channel,
                content: payload.content,
                image_suggestion: payload.imageSuggestion
            })
            .runAdapter(ContentCalendarAdapter.parseItem);
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
        channel?: ContentCalendarItemChannel | null;
        scheduledOn?: string | null;
        content?: string | null;
        additionalInstructions?: string | null;
    }): Promise<BaseResponse<{ content: string; imageSuggestion: string | null }>> {
        return await this
            .request(`/merchants/${merchantId}/content-calendar/generate-text`)
            .method('post')
            .bearerToken()
            .body({
                event_id: options.eventId ?? null,
                channel: options.channel ?? null,
                scheduled_on: options.scheduledOn ?? null,
                content: options.content ?? null,
                additional_instructions: options.additionalInstructions ?? null
            })
            .runAdapter((data: any) => ({
                content: String(data.content ?? ''),
                imageSuggestion: data.image_suggestion ?? null
            }));
    }
}
