import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, FileSystemAdapter, MarketingAttributionAdapter } from '#data/adapter';
import { ReservationDto, ReservationItemDto, ReservationProductDto } from '#data/dto';
import { optional, optionalArray } from '#data/util';

@adapter
export class ReservationAdapter {
    static parseReservation(data: ForeignData): ReservationDto {
        return new ReservationDto(
            data.id,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.expires_on),
            data.is_expired,
            optionalArray(data.products, ReservationAdapter.parseReservationItem)!,
            optional(data.attribution, MarketingAttributionAdapter.parseMarketingAttribution)
        );
    }

    static parseReservationItem(data: ForeignData): ReservationItemDto {
        return new ReservationItemDto(
            data.quantity,
            ReservationAdapter.parseReservationProduct(data.product)
        );
    }

    static parseReservationProduct(data: ForeignData): ReservationProductDto {
        return new ReservationProductDto(
            data.id,
            data.name,
            data.description,
            optional(data.image, FileSystemAdapter.parsePicture)
        );
    }
}
