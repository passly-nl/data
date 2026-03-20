import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import { OrderAdapter, PublicShopAdapter } from '#data/adapter';
import type { OrderDto, PublicShopCartProductDto, PublicShopDto, PublicShopReservationDto } from '#data/dto';
import type { Gender } from '#data/types';
import { emptyNull } from '#data/util';

export class PublicShopService extends BaseService {
    async get(shopId: string): Promise<BaseResponse<PublicShopDto>> {
        return await this
            .request(`/shops/${shopId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(PublicShopAdapter.parsePublicShop);
    }

    async buy(shopId: string, reservationId: string, firstName: string, lastName: string, email: string, phoneNumber: string, dateOfBirth: DateTime | null, gender: Gender | null, addressCity: string | null, addressCountry: string | null, addressNumber: string | null, addressPostalCode: string | null, addressStreet: string | null): Promise<BaseResponse<OrderDto>> {
        let address: Record<string, string | null> = null;

        addressCity = emptyNull(addressCity);
        addressCountry = emptyNull(addressCountry);
        addressNumber = emptyNull(addressNumber);
        addressPostalCode = emptyNull(addressPostalCode);
        addressStreet = emptyNull(addressStreet);

        if (addressCity || addressCountry || addressNumber || addressPostalCode || addressStreet) {
            address = {
                city: addressCity,
                country_code: addressCountry,
                number: addressNumber,
                postal_code: addressPostalCode,
                street: addressStreet
            };
        }

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
                gender: gender,
                address
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
