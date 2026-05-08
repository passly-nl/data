import { adapter, ForeignData } from '@basmilius/http-client';
import { BuyerAdapter, DateTimeAdapter, EventAdapter, OrderAdapter, ProductAdapter } from '#data/adapter';
import { TicketDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class TicketAdapter {
    static parseTicket(data: ForeignData): TicketDto {
        return new TicketDto(
            data.id,
            data.sequence,
            data.code,
            data.status,
            data.validity,
            data.is_refundable ?? false,
            optional(data.buyer, BuyerAdapter.parseBuyer)!,
            optional(data.event, EventAdapter.parseEvent)!,
            optional(data.holder, BuyerAdapter.parseBuyer)!,
            optional(data.order, OrderAdapter.parseOrder)!,
            optional(data.product, ProductAdapter.parseProduct)!,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }
}
