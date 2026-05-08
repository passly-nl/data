import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter } from '#data/adapter';
import { RefundDto, RefundInitiatorDto, RefundTicketRefDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class RefundAdapter {
    static parseRefund(data: ForeignData): RefundDto {
        return new RefundDto(
            data.id,
            data.status,
            PaymentAdapter.parseCost(data.amount),
            data.reason,
            data.reason_label,
            data.note,
            DateTimeAdapter.parseDateTime(data.created_on),
            optional(data.completed_on, DateTimeAdapter.parseDateTime)
        );
    }

    static parseRefundInitiator(data: ForeignData): RefundInitiatorDto {
        return new RefundInitiatorDto(
            data.id,
            data.name
        );
    }

    static parseRefundTicketRef(data: ForeignData): RefundTicketRefDto {
        return new RefundTicketRefDto(
            data.id,
            data.code
        );
    }
}
