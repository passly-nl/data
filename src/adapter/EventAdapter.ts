import { adapter, ForeignData } from '@basmilius/http-client';
import { AddressAdapter, AuthAdapter, DateTimeAdapter, FileSystemAdapter, MerchantAdapter, ProductAdapter } from '#data/adapter';
import { AppTeamDto, EventAvailabilityDto, EventCountersDto, EventDto, ShopDesignDto, ShopDto, ShopElementButtonDto, ShopElementDividerDto, ShopElementDto, ShopElementHeadingDto, ShopElementInformationDto, ShopElementNoticeDto, ShopElementProductDto, ShopElementTextDto, StockOverviewDto, StockOverviewItemDto, StockPoolDto, TicketTemplateDto, TimeSlotDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class EventAdapter {
    static parseAppTeam(data: ForeignData): AppTeamDto {
        return new AppTeamDto(
            data.id,
            data.name,
            data.secret,
            data.checkin_count,
            data.checkout_count,
            optional(data.creator, AuthAdapter.parseUser),
            optional(data.event, EventAdapter.parseEvent),
            optional(data.merchant, MerchantAdapter.parseMerchant)
        );
    }

    static parseEvent(data: ForeignData): EventDto {
        return new EventDto(
            data.id,
            data.name,
            data.description,
            DateTimeAdapter.parseDateTime(data.starts_on),
            DateTimeAdapter.parseDateTime(data.ends_on),
            data.minimum_age,
            data.status,
            optional(data.address, AddressAdapter.parseAddress)!,
            optional(data.header_file, FileSystemAdapter.parsePicture)!,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }

    static parseEventAvailability(data: ForeignData): EventAvailabilityDto {
        return new EventAvailabilityDto(
            data.has_products,
            data.has_shops,
            data.has_shops_with_products,
            data.is_publishable,
            data.is_published
        );
    }

    static parseEventCounters(data: ForeignData): EventCountersDto {
        return new EventCountersDto(
            data.guests,
            data.orders,
            data.tickets
        );
    }

    static parseShop(data: ForeignData): ShopDto {
        return new ShopDto(
            data.id,
            data.name,
            data.is_published,
            data.password,
            optional(data.starts_on, DateTimeAdapter.parseDateTime),
            optional(data.ends_on, DateTimeAdapter.parseDateTime),
            data.field_address,
            data.field_address_mode,
            data.field_birthdate,
            data.field_gender,
            data.field_phone_number,
            data.status,
            optional(data.design, EventAdapter.parseShopDesign),
            optional(data.event, EventAdapter.parseEvent),
            optional(data.merchant, MerchantAdapter.parseMerchant)
        );
    }

    static parseShopDesign(data: ForeignData): ShopDesignDto {
        return new ShopDesignDto(
            data.background_color,
            data.foreground_color,
            data.primary_color
        );
    }

    static parseShopElement(data: ForeignData): ShopElementDto {
        switch (data.type) {
            case 'button':
                return new ShopElementButtonDto(
                    data.id,
                    data.icon,
                    data.text,
                    data.url
                );

            case 'divider':
                return new ShopElementDividerDto(
                    data.id,
                    data.icon,
                    data.text
                );

            case 'heading':
                return new ShopElementHeadingDto(
                    data.id,
                    data.heading_level,
                    data.title
                );

            case 'information':
                return new ShopElementInformationDto(
                    data.id
                );

            case 'notice':
                return new ShopElementNoticeDto(
                    data.id,
                    data.icon,
                    data.notice_type,
                    data.title,
                    data.text
                );

            case 'product':
                return new ShopElementProductDto(
                    data.id,
                    ProductAdapter.parseProduct(data.product)
                );

            case 'text':
                return new ShopElementTextDto(
                    data.id,
                    data.text
                );
        }

        return new ShopElementTextDto(
            'unknown',
            'Unknown element type.'
        );
    }

    static parseStockOverview(data: ForeignData): StockOverviewDto {
        return new StockOverviewDto(
            data.total,
            data.sold,
            data.remaining,
            data.items.map(EventAdapter.parseStockOverviewItem)
        );
    }

    static parseStockOverviewItem(data: ForeignData): StockOverviewItemDto {
        return new StockOverviewItemDto(
            EventAdapter.parseStockPool(data.pool),
            ProductAdapter.parseProduct(data.product),
            data.remaining,
            data.sold
        );
    }

    static parseStockPool(data: ForeignData): StockPoolDto {
        return new StockPoolDto(
            data.id,
            data.event_id,
            data.merchant_id,
            data.name,
            data.remaining_stock,
            data.stock,
            data.is_shared,
            data.product_names ?? [],
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }

    static parseTicketTemplate(data: ForeignData): TicketTemplateDto {
        return new TicketTemplateDto(
            data.id,
            data.name,
            optional(data.product, ProductAdapter.parseProduct),
            data.product_id,
            data.variant,
            optional(data.visual, FileSystemAdapter.parsePicture)
        );
    }

    static parseTimeSlot(data: ForeignData): TimeSlotDto {
        return new TimeSlotDto(
            data.id,
            data.label,
            DateTimeAdapter.parseDateTime(data.from_time),
            DateTimeAdapter.parseDateTime(data.to_time),
            data.product_count
        );
    }
}
