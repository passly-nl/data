import { adapter } from '@basmilius/http-client';
import { BuyerAdapter, DateTimeAdapter, EventAdapter, OrderAdapter, ProductAdapter } from '../adapter';
import { TicketDto } from '../dto';
import { optional } from '../util';

@adapter
export class TicketAdapter {
    static parseTicketFromObject(ticket: Record<string, any>): TicketDto {
        return new TicketDto(
            ticket.id,
            ticket.sequence,
            ticket.code,
            ticket.status,
            ticket.validity,
            optional(ticket.buyer, BuyerAdapter.parseBuyerFromObject)!,
            optional(ticket.event, EventAdapter.parseEventFromObject)!,
            optional(ticket.holder, BuyerAdapter.parseBuyerFromObject)!,
            optional(ticket.order, OrderAdapter.parseOrderFromObject)!,
            optional(ticket.product, ProductAdapter.parseProductFromObject)!,
            DateTimeAdapter.parseDateTimeFromString(ticket.created_on),
            DateTimeAdapter.parseDateTimeFromString(ticket.updated_on)
        );
    }
}
