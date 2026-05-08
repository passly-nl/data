import { BaseResponse, BaseService, type ForeignData, QueryString } from '@basmilius/http-client';
import { ContentCalendarAdapter } from '#data/adapter';
import type { ContentCalendarItemDto } from '#data/dto';
import type { ContentCalendarItemChannel, ContentCalendarItemStatus } from '#data/types';

export class MerchantEventContentCalendarService extends BaseService {
    async list(merchantId: string, eventId: string, params?: { from?: string; to?: string }): Promise<BaseResponse<ContentCalendarItemDto[]>> {
        const qs = QueryString.builder();

        if (params?.from) {
            qs.append('from', params.from);
        }

        if (params?.to) {
            qs.append('to', params.to);
        }

        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/content-calendar`)
            .method('get')
            .queryString(qs)
            .bearerToken()
            .runArrayAdapter(ContentCalendarAdapter.parseItem);
    }

    async create(merchantId: string, eventId: string, payload: ContentCalendarItemPayload): Promise<BaseResponse<ContentCalendarItemDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/content-calendar`)
            .method('post')
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

    async update(merchantId: string, eventId: string, itemId: string, payload: Partial<ContentCalendarItemPayload>): Promise<BaseResponse<ContentCalendarItemDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/content-calendar/${itemId}`)
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

    async delete(merchantId: string, eventId: string, itemId: string): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/content-calendar/${itemId}`)
            .method('delete')
            .bearerToken()
            .run();
    }

    async generate(merchantId: string, eventId: string, options?: { additionalInstructions?: string | null; }): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/content-calendar/generate`)
            .method('post')
            .bearerToken()
            .body({
                additional_instructions: options?.additionalInstructions ?? null
            })
            .run();
    }

    async generateText(merchantId: string, eventId: string, options: { channel?: ContentCalendarItemChannel | null; scheduledOn?: string | null; content?: string | null; additionalInstructions?: string | null; }): Promise<BaseResponse<{ content: string; imageSuggestion: string | null }>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/content-calendar/generate-text`)
            .method('post')
            .bearerToken()
            .body({
                channel: options.channel ?? null,
                scheduled_on: options.scheduledOn ?? null,
                content: options.content ?? null,
                additional_instructions: options.additionalInstructions ?? null
            })
            .runAdapter((data: ForeignData) => ({
                content: String(data.content ?? ''),
                imageSuggestion: data.image_suggestion ?? null
            }));
    }

    async brainstorm(merchantId: string, eventId: string, payload: { ideas: string[]; }): Promise<BaseResponse<ContentCalendarItemDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/content-calendar/brainstorm`)
            .method('post')
            .bearerToken()
            .body({
                ideas: payload.ideas
            })
            .runArrayAdapter(ContentCalendarAdapter.parseItem);
    }

    async getGenerationStatus(merchantId: string, eventId: string): Promise<BaseResponse<{ eventId: string; generating: boolean; since: string | null }>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/content-calendar/generation-status`)
            .method('get')
            .bearerToken()
            .runAdapter((data: ForeignData) => ({
                eventId: String(data.event_id),
                generating: Boolean(data.generating),
                since: data.since ?? null
            }));
    }
}

export type ContentCalendarItemPayload = {
    readonly scheduledOn?: string | null;
    readonly status?: ContentCalendarItemStatus;
    readonly channel?: ContentCalendarItemChannel | null;
    readonly content?: string | null;
    readonly imageSuggestion?: string | null;
};
