import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import type { FluxFormSelectEntry } from '@flux-ui/types';
import type { DateTime } from 'luxon';
import { EventAdapter, FluxAdapter } from '#data/adapter';
import type { TimeSlotDto } from '#data/dto';

export class MerchantEventTimeSlotsService extends BaseService {
    async list(merchantId: string, eventId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<TimeSlotDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/time-slots`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .bearerToken()
            .runPaginatedAdapter(EventAdapter.parseTimeSlot);
    }

    async getSelectOptions(merchantId: string, eventId: string, searchQuery: string | null = null, ids: string[] | null = null): Promise<BaseResponse<FluxFormSelectEntry[]>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/time-slots/select-options`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .appendArray('ids[]', ids)
                .append('searchQuery', searchQuery))
            .bearerToken()
            .runArrayAdapter(FluxAdapter.parseFluxFormSelectEntry);
    }

    async create(merchantId: string, eventId: string, fromTime: DateTime, toTime: DateTime, label: string | null = null): Promise<BaseResponse<TimeSlotDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/time-slots`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                from_time: fromTime.toISO(),
                to_time: toTime.toISO(),
                label
            })
            .runAdapter(EventAdapter.parseTimeSlot);
    }
}
