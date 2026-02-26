import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { OrderAdapter, PublicShopAdapter } from '../adapter';
import type { OrderDto, PublicShopCartProductDto, PublicShopDto, PublicShopReservationDto } from '../dto';
import type { Gender } from '../types';

export class PublicShopService extends BaseService {
    async get(shopId: string): Promise<BaseResponse<PublicShopDto>> {
        return await this
            .request(`/shops/${shopId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(PublicShopAdapter.parsePublicShop);
    }

    async buy(shopId: string, reservationId: string, firstName: string, lastName: string, email: string, phoneNumber: string, dateOfBirth: DateTime | null, gender: Gender | null): Promise<BaseResponse<OrderDto>> {
        return await this
            .request(`/shops/${shopId}/buy/${reservationId}`)
            .method('post')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phoneNumber.trim() === '' ? null : phoneNumber.trim(),
                date_of_birth: dateOfBirth?.toISODate(),
                gender: gender
            })
            .runAdapter(OrderAdapter.parseOrder);
    }

    async reserve(shopId: string, products: PublicShopCartProductDto[]): Promise<BaseResponse<PublicShopReservationDto>> {
        return await this
            .request(`/shops/${shopId}/reserve`)
            .method('post')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                products: products.map(p => [
                    p.productId,
                    p.quantity,
                    p.timeSlotId
                ])
            })
            .runAdapter(PublicShopAdapter.parsePublicShopReservation);
    }
}
