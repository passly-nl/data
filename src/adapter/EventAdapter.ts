import { adapter } from '@basmilius/http-client';
import { AddressAdapter, DateTimeAdapter, FileSystemAdapter, MerchantAdapter, PaymentAdapter, ProductAdapter } from '#data/adapter';
import { EventAvailabilityDto, EventCountersDto, EventDto, EventStatisticsAttendanceDto, EventStatisticsBuyerTotalsDto, EventStatisticsFinancialDto, EventStatisticsOrdersDto, EventStatisticsOrderTotalsDto, EventStatisticsScansDto, EventStatisticsScansPerAppTeamDto, EventStatisticsScanTotalsDto, EventStatisticsSwapTotalsDto, ShopDesignDto, ShopDto, ShopElementButtonDto, ShopElementDividerDto, ShopElementDto, ShopElementHeadingDto, ShopElementNoticeDto, ShopElementProductDto, ShopElementTextDto, StockOverviewDto, StockOverviewItemDto, StockPoolDto, TicketTemplateDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class EventAdapter {
    static parseEventFromObject(event: Record<string, any>): EventDto {
        return new EventDto(
            event.id,
            event.name,
            event.description,
            DateTimeAdapter.parseDateTimeFromString(event.starts_on),
            DateTimeAdapter.parseDateTimeFromString(event.ends_on),
            event.minimum_age,
            event.status,
            optional(event.address, AddressAdapter.parseAddressFromObject)!,
            optional(event.header_file, FileSystemAdapter.parsePictureFromObject)!,
            DateTimeAdapter.parseDateTimeFromString(event.created_on),
            DateTimeAdapter.parseDateTimeFromString(event.updated_on)
        );
    }

    static parseEventAvailabilityFromObject(availability: Record<string, any>): EventAvailabilityDto {
        return new EventAvailabilityDto(
            availability.has_products,
            availability.has_shops,
            availability.has_shops_with_products,
            availability.is_publishable,
            availability.is_published
        );
    }

    static parseEventCountersFromObject(counters: Record<string, any>): EventCountersDto {
        return new EventCountersDto(
            counters.guests,
            counters.orders,
            counters.tickets
        );
    }

    static parseShopFromObject(shop: Record<string, any>): ShopDto {
        return new ShopDto(
            shop.id,
            shop.name,
            shop.is_published,
            shop.password,
            optional(shop.starts_on, DateTimeAdapter.parseDateTimeFromString),
            optional(shop.ends_on, DateTimeAdapter.parseDateTimeFromString),
            shop.field_address,
            shop.field_birthdate,
            shop.field_gender,
            shop.field_phone_number,
            shop.status,
            optional(shop.design, EventAdapter.parseShopDesignFromObject),
            optional(shop.event, EventAdapter.parseEventFromObject),
            optional(shop.merchant, MerchantAdapter.parseMerchantFromObject)
        );
    }

    static parseShopDesignFromObject(design: Record<string, any>): ShopDesignDto {
        return new ShopDesignDto(
            design.background_color,
            design.foreground_color,
            design.primary_color
        );
    }

    static parseShopElementFromObject(element: Record<string, any>): ShopElementDto {
        switch (element.type) {
            case 'button':
                return new ShopElementButtonDto(
                    element.id,
                    element.icon,
                    element.text,
                    element.url
                );

            case 'divider':
                return new ShopElementDividerDto(
                    element.id,
                    element.icon,
                    element.text
                );

            case 'heading':
                return new ShopElementHeadingDto(
                    element.id,
                    element.heading_level,
                    element.title
                );

            case 'notice':
                return new ShopElementNoticeDto(
                    element.id,
                    element.icon,
                    element.notice_type,
                    element.title,
                    element.text
                );

            case 'product':
                return new ShopElementProductDto(
                    element.id,
                    ProductAdapter.parseProductFromObject(element.product)
                );

            case 'text':
                return new ShopElementTextDto(
                    element.id,
                    element.text
                );
        }

        return new ShopElementTextDto(
            'unknown',
            'Unknown element type.'
        );
    }

    static parseStockOverviewFromObject(overview: Record<string, any>): StockOverviewDto {
        return new StockOverviewDto(
            overview.total,
            overview.sold,
            overview.remaining,
            overview.items.map(EventAdapter.parseStockOverviewItemFromObject)
        );
    }

    static parseStockOverviewItemFromObject(item: Record<string, any>): StockOverviewItemDto {
        return new StockOverviewItemDto(
            EventAdapter.parseStockPoolFromObject(item.pool),
            ProductAdapter.parseProductFromObject(item.product),
            item.remaining,
            item.sold
        );
    }

    static parseStockPoolFromObject(pool: Record<string, any>): StockPoolDto {
        return new StockPoolDto(
            pool.id,
            pool.event_id,
            pool.merchant_id,
            pool.name,
            pool.remaining_stock,
            pool.stock,
            pool.is_shared,
            pool.product_names ?? [],
            DateTimeAdapter.parseDateTimeFromString(pool.created_on),
            DateTimeAdapter.parseDateTimeFromString(pool.updated_on)
        );
    }

    static parseTicketTemplateFromObject(template: Record<string, any>): TicketTemplateDto {
        return new TicketTemplateDto(
            template.id,
            template.name,
            optional(template.product, ProductAdapter.parseProductFromObject),
            template.product_id,
            template.variant,
            optional(template.visual, FileSystemAdapter.parsePictureFromObject)
        );
    }

    static parseEventStatisticsAttendanceFromObject(attendance: Record<string, any>): EventStatisticsAttendanceDto {
        return new EventStatisticsAttendanceDto(
            attendance.attended,
            attendance.expected,
            attendance.rate
        );
    }

    static parseEventStatisticsBuyerTotalsFromObject(totals: Record<string, any>): EventStatisticsBuyerTotalsDto {
        return new EventStatisticsBuyerTotalsDto(
            totals.acquired,
            totals.average_tickets,
            totals.doubting,
            totals.returning,
            totals.total
        );
    }

    static parseEventStatisticsFinancialFromObject(financial: Record<string, any>): EventStatisticsFinancialDto {
        return new EventStatisticsFinancialDto(
            PaymentAdapter.parseCostFromObject(financial.platform_cost),
            PaymentAdapter.parseCostFromObject(financial.revenue)
        );
    }

    static parseEventStatisticsOrdersFromObject(totals: Record<string, any>): EventStatisticsOrdersDto {
        return new EventStatisticsOrdersDto(
            totals.chart,
            EventAdapter.parseEventStatisticsOrderTotalsFromObject(totals.totals)
        );
    }

    static parseEventStatisticsOrderTotalsFromObject(totals: Record<string, any>): EventStatisticsOrderTotalsDto {
        return new EventStatisticsOrderTotalsDto(
            totals.fulfilled,
            totals.interrupted,
            totals.pending,
            totals.total
        );
    }

    static parseEventStatisticsScansFromObject(scans: Record<string, any>): EventStatisticsScansDto {
        return new EventStatisticsScansDto(
            scans.app_teams.map(EventAdapter.parseEventStatisticsScansPerAppTeamFromObject),
            scans.chart,
            EventAdapter.parseEventStatisticsScanTotalsFromObject(scans.totals)
        );
    }

    static parseEventStatisticsScansPerAppTeamFromObject(appTeam: Record<string, any>): EventStatisticsScansPerAppTeamDto {
        return new EventStatisticsScansPerAppTeamDto(
            appTeam.id,
            appTeam.name,
            appTeam.scans
        );
    }

    static parseEventStatisticsScanTotalsFromObject(totals: Record<string, any>): EventStatisticsScanTotalsDto {
        return new EventStatisticsScanTotalsDto(
            totals.total,
            totals.checkins,
            totals.checkouts
        );
    }

    static parseEventStatisticsSwapTotalsFromObject(totals: Record<string, any>): EventStatisticsSwapTotalsDto {
        return new EventStatisticsSwapTotalsDto(
            totals.swaps,
            totals.tickets,
            totals.rate
        );
    }
}
