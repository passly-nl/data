import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { CommonAdapter, EventAdapter } from '../adapter';
import type { EventAvailabilityDto, EventCountersDto, EventDto, StatusResponseDto } from '../dto';
import { emptyNull } from '../util';

export class MerchantEventService extends BaseService {
    async get(merchantId: string, eventId: string): Promise<BaseResponse<EventDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEvent);
    }

    async getAvailability(merchantId: string, eventId: string): Promise<BaseResponse<EventAvailabilityDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/availability`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEventAvailability);
    }

    async getCounters(merchantId: string, eventId: string): Promise<BaseResponse<EventCountersDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/counters`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(EventAdapter.parseEventCounters);
    }

    async post(merchantId: string, event: EventDto): Promise<BaseResponse<EventDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${event.id}`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                name: event.name,
                description: event.description,
                starts_on: event.startsOn.toISO(),
                ends_on: event.endsOn.toISO(),
                minimum_age: event.minimumAge,
                address: {
                    label: emptyNull(event.address.label),
                    street: event.address.street,
                    number: event.address.number,
                    postal_code: event.address.postalCode,
                    city: event.address.city,
                    country_code: event.address.country
                }
            })
            .runAdapter(EventAdapter.parseEvent);
    }

    async postHeader(merchantId: string, eventId: string, picture: File): Promise<BaseResponse<StatusResponseDto>> {
        const data = new FormData();
        data.append('file', picture);

        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/header`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body(data)
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async postPublish(merchantId: string, eventId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/publish`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async postUnpublish(merchantId: string, eventId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/unpublish`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async delete(merchantId: string, eventId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }

    async deleteHeader(merchantId: string, eventId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/header`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponse);
    }
}
