import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { ReservationAdapter } from '../adapter';
import type { ReservationDto } from '../dto';

export class ReservationService extends BaseService {
    async get(id: string): Promise<BaseResponse<ReservationDto>> {
        return await this
            .request(`/reservations/${id}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(ReservationAdapter.parseReservationFromObject);
    }

    async remove(id: string): Promise<BaseResponse<never>> {
        return await this
            .request(`/reservations/${id}`)
            .method('delete')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .run();
    }
}
