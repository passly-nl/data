import { adapter } from '@basmilius/http-client';
import { AddressAdapter, DateTimeAdapter, FileSystemAdapter, PaymentAdapter } from '../adapter';
import { PublicShopDesignDto, PublicShopDto, PublicShopElementButtonDto, PublicShopElementDividerDto, PublicShopElementDto, PublicShopElementHeadingDto, PublicShopElementNoticeDto, PublicShopElementProductDto, PublicShopElementTextDto, PublicShopEventDto, PublicShopMerchantDto, PublicShopProductDto, PublicShopReservationDto, PublicShopReservationProductDetailsDto, PublicShopReservationProductDto, PublicShopTimeSlotDto } from '../dto';
import { optional, optionalArray } from '../util';

@adapter
export class PublicShopAdapter {
    static parsePublicShopFromObject(shop: Record<string, any>): PublicShopDto {
        return new PublicShopDto(
            shop.id,
            shop.name,
            DateTimeAdapter.parseDateTimeFromString(shop.starts_on),
            DateTimeAdapter.parseDateTimeFromString(shop.ends_on),
            shop.field_address,
            shop.field_birthdate,
            shop.field_gender,
            shop.field_phone_number,
            optional(shop.design, PublicShopAdapter.parsePublicShopDesignFromObject),
            optionalArray(shop.elements, PublicShopAdapter.parsePublicShopElementFromObject),
            PublicShopAdapter.parsePublicShopEventFromObject(shop.event),
            PublicShopAdapter.parsePublicShopMerchantFromObject(shop.merchant)
        );
    }

    static parsePublicShopDesignFromObject(design: Record<string, any>): PublicShopDesignDto {
        return new PublicShopDesignDto(
            design.background_color,
            design.foreground_color,
            design.primary_color
        );
    }

    static parsePublicShopElementFromObject(element: Record<string, any>): PublicShopElementDto {
        switch (element.type) {
            case 'button':
                return new PublicShopElementButtonDto(
                    element.id,
                    element.icon,
                    element.text,
                    element.url
                );

            case 'divider':
                return new PublicShopElementDividerDto(
                    element.id,
                    element.icon,
                    element.text
                );

            case 'heading':
                return new PublicShopElementHeadingDto(
                    element.id,
                    element.heading_level,
                    element.title
                );

            case 'notice':
                return new PublicShopElementNoticeDto(
                    element.id,
                    element.icon,
                    element.notice_type,
                    element.title,
                    element.text
                );

            case 'product':
                return new PublicShopElementProductDto(
                    element.id,
                    PublicShopAdapter.parsePublicShopProductFromObject(element.product)
                );

            case 'text':
                return new PublicShopElementTextDto(
                    element.id,
                    element.text
                );
        }

        throw new Error('Unknown shop element.');
    }

    static parsePublicShopEventFromObject(event: Record<string, any>): PublicShopEventDto {
        return new PublicShopEventDto(
            event.id,
            event.name,
            event.status,
            AddressAdapter.parseAddressFromObject(event.address),
            optional(event.header_file, FileSystemAdapter.parsePictureFromObject)
        );
    }

    static parsePublicShopMerchantFromObject(merchant: Record<string, any>): PublicShopMerchantDto {
        return new PublicShopMerchantDto(
            merchant.id,
            merchant.name
        );
    }

    static parsePublicShopProductFromObject(product: Record<string, any>): PublicShopProductDto {
        return new PublicShopProductDto(
            product.id,
            product.type,
            product.name,
            product.description,
            PaymentAdapter.parseCostFromObject(product.price),
            product.max_quantity,
            product.is_active,
            product.is_timeslotted,
            optionalArray(product.time_slots, PublicShopAdapter.parsePublicShopTimeSlotFromObject)!,
            optional(product.image, FileSystemAdapter.parsePictureFromObject),
            optionalArray(product.images, FileSystemAdapter.parsePictureFromObject)!
        );
    }

    static parsePublicShopReservationFromObject(reservation: Record<string, any>): PublicShopReservationDto {
        return new PublicShopReservationDto(
            reservation.id,
            DateTimeAdapter.parseDateTimeFromString(reservation.created_on),
            DateTimeAdapter.parseDateTimeFromString(reservation.expires_on),
            reservation.products.map(PublicShopAdapter.parsePublicShopReservationProductFromObject)
        );
    }

    static parsePublicShopReservationProductFromObject(product: Record<string, any>): PublicShopReservationProductDto {
        return new PublicShopReservationProductDto(
            PublicShopAdapter.parsePublicShopReservationProductDetailsFromObject(product.product),
            product.quantity
        );
    }

    static parsePublicShopReservationProductDetailsFromObject(details: Record<string, any>): PublicShopReservationProductDetailsDto {
        return new PublicShopReservationProductDetailsDto(
            details.id,
            details.name,
            details.description,
            optional(details.image, FileSystemAdapter.parsePictureFromObject)
        );
    }

    static parsePublicShopTimeSlotFromObject(timeSlot: Record<string, any>): PublicShopTimeSlotDto {
        return new PublicShopTimeSlotDto(
            timeSlot.id,
            timeSlot.label,
            DateTimeAdapter.parseDateTimeFromString(timeSlot.from_time),
            DateTimeAdapter.parseDateTimeFromString(timeSlot.to_time),
            timeSlot.max_quantity
        );
    }
}
