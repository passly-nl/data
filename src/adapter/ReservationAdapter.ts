import { adapter } from '@basmilius/http-client';
import { DateTimeAdapter, FileSystemAdapter } from '../adapter';
import { ReservationDto, ReservationItemDto, ReservationProductDto } from '../dto';
import { optional, optionalArray } from '../util';

@adapter
export class ReservationAdapter {
    static parseReservationFromObject(reservation: Record<string, any>): ReservationDto {
        return new ReservationDto(
            reservation.id,
            DateTimeAdapter.parseDateTimeFromString(reservation.created_on),
            DateTimeAdapter.parseDateTimeFromString(reservation.expires_on),
            reservation.is_expired,
            optionalArray(reservation.products, ReservationAdapter.parseReservationItemFromObject)!
        );
    }

    static parseReservationItemFromObject(item: Record<string, any>): ReservationItemDto {
        return new ReservationItemDto(
            item.quantity,
            ReservationAdapter.parseReservationProductFromObject(item.product)
        );
    }

    static parseReservationProductFromObject(product: Record<string, any>): ReservationProductDto {
        return new ReservationProductDto(
            product.id,
            product.name,
            product.description,
            optional(product.image, FileSystemAdapter.parsePictureFromObject)
        );
    }
}
