import { adapter, ForeignData } from '@basmilius/http-client';
import { AddressAdapter, DateTimeAdapter, FileSystemAdapter, PaymentAdapter } from '#data/adapter';
import { PublicShopDesignDto, PublicShopDto, PublicShopElementButtonDto, PublicShopElementDividerDto, PublicShopElementDto, PublicShopElementHeadingDto, PublicShopElementNoticeDto, PublicShopElementProductDto, PublicShopElementTextDto, PublicShopEventDto, PublicShopMerchantDto, PublicShopProductDto, PublicShopReservationDto, PublicShopReservationProductDetailsDto, PublicShopReservationProductDto, PublicShopTimeSlotDto } from '#data/dto';
import { optional, optionalArray } from '#data/util';

@adapter
export class PublicShopAdapter {
    static parsePublicShop(data: ForeignData): PublicShopDto {
        return new PublicShopDto(
            data.id,
            data.name,
            DateTimeAdapter.parseDateTime(data.starts_on),
            DateTimeAdapter.parseDateTime(data.ends_on),
            data.field_address,
            data.field_address_mode,
            data.field_birthdate,
            data.field_gender,
            data.field_phone_number,
            optional(data.design, PublicShopAdapter.parsePublicShopDesign),
            optionalArray(data.elements, PublicShopAdapter.parsePublicShopElement),
            PublicShopAdapter.parsePublicShopEvent(data.event),
            PublicShopAdapter.parsePublicShopMerchant(data.merchant)
        );
    }

    static parsePublicShopDesign(data: ForeignData): PublicShopDesignDto {
        return new PublicShopDesignDto(
            data.background_color,
            data.foreground_color,
            data.primary_color
        );
    }

    static parsePublicShopElement(data: ForeignData): PublicShopElementDto {
        switch (data.type) {
            case 'button':
                return new PublicShopElementButtonDto(
                    data.id,
                    data.icon,
                    data.text,
                    data.url
                );

            case 'divider':
                return new PublicShopElementDividerDto(
                    data.id,
                    data.icon,
                    data.text
                );

            case 'heading':
                return new PublicShopElementHeadingDto(
                    data.id,
                    data.heading_level,
                    data.title
                );

            case 'notice':
                return new PublicShopElementNoticeDto(
                    data.id,
                    data.icon,
                    data.notice_type,
                    data.title,
                    data.text
                );

            case 'product':
                return new PublicShopElementProductDto(
                    data.id,
                    PublicShopAdapter.parsePublicShopProduct(data.product)
                );

            case 'text':
                return new PublicShopElementTextDto(
                    data.id,
                    data.text
                );
        }

        throw new Error('Unknown shop element.');
    }

    static parsePublicShopEvent(data: ForeignData): PublicShopEventDto {
        return new PublicShopEventDto(
            data.id,
            data.name,
            data.status,
            AddressAdapter.parseAddress(data.address),
            optional(data.header_file, FileSystemAdapter.parsePicture)
        );
    }

    static parsePublicShopMerchant(data: ForeignData): PublicShopMerchantDto {
        return new PublicShopMerchantDto(
            data.id,
            data.name
        );
    }

    static parsePublicShopProduct(data: ForeignData): PublicShopProductDto {
        return new PublicShopProductDto(
            data.id,
            data.type,
            data.name,
            data.description,
            PaymentAdapter.parseCost(data.price),
            data.max_quantity,
            data.is_active,
            data.is_timeslotted,
            optionalArray(data.time_slots, PublicShopAdapter.parsePublicShopTimeSlot)!,
            optional(data.image, FileSystemAdapter.parsePicture),
            optionalArray(data.images, FileSystemAdapter.parsePicture)!
        );
    }

    static parsePublicShopReservation(data: ForeignData): PublicShopReservationDto {
        return new PublicShopReservationDto(
            data.id,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.expires_on),
            data.products.map(PublicShopAdapter.parsePublicShopReservationProduct)
        );
    }

    static parsePublicShopReservationProduct(data: ForeignData): PublicShopReservationProductDto {
        return new PublicShopReservationProductDto(
            PublicShopAdapter.parsePublicShopReservationProductDetails(data.product),
            data.quantity
        );
    }

    static parsePublicShopReservationProductDetails(data: ForeignData): PublicShopReservationProductDetailsDto {
        return new PublicShopReservationProductDetailsDto(
            data.id,
            data.name,
            data.description,
            optional(data.image, FileSystemAdapter.parsePicture)
        );
    }

    static parsePublicShopTimeSlot(data: ForeignData): PublicShopTimeSlotDto {
        return new PublicShopTimeSlotDto(
            data.id,
            data.label,
            DateTimeAdapter.parseDateTime(data.from_time),
            DateTimeAdapter.parseDateTime(data.to_time),
            data.max_quantity
        );
    }
}
