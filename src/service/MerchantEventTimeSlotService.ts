import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { EventAdapter } from '#data/adapter';
import type { TimeSlotDto } from '#data/dto';

export class MerchantEventTimeSlotService extends BaseService {
    async get(merchantId: string, eventId: string, timeSlotId: string): Promise<BaseResponse<TimeSlotDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/time-slots/${timeSlotId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseTimeSlot);
    }

    async update(merchantId: string, eventId: string, timeSlotId: string, fromTime?: DateTime, toTime?: DateTime, label?: string | null): Promise<BaseResponse<TimeSlotDto>> {
        const body: Record<string, unknown> = {};

        if (fromTime !== undefined) {
            body.from_time = fromTime.toISO();
        }

        if (toTime !== undefined) {
            body.to_time = toTime.toISO();
        }

        if (label !== undefined) {
            body.label = label;
        }

        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/time-slots/${timeSlotId}`)
            .method('put')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body(body)
            .runAdapter(EventAdapter.parseTimeSlot);
    }

    async delete(merchantId: string, eventId: string, timeSlotId: string): Promise<BaseResponse<never>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/time-slots/${timeSlotId}`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runEmpty();
    }
}
