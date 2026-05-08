import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter } from '#data/adapter';
import { DiscountCodeDto } from '#data/dto';
import type { DiscountCodeEvent } from '#data/types';
import { optional } from '#data/util';

@adapter
export class DiscountCodeAdapter {
    static parseDiscountCode(data: ForeignData): DiscountCodeDto {
        return new DiscountCodeDto(
            data.id,
            data.code,
            data.type,
            data.percentage,
            optional(data.amount, PaymentAdapter.parseCost),
            data.max_uses,
            DateTimeAdapter.parseDateTime(data.valid_from),
            DateTimeAdapter.parseDateTime(data.valid_until),
            DateTimeAdapter.parseDateTime(data.created_on),
            data.uses_count,
            data.remaining_uses,
            data.is_currently_valid,
            optional(data.event, DiscountCodeAdapter.parseDiscountCodeEvent)
        );
    }

    static parseDiscountCodeEvent(data: ForeignData): DiscountCodeEvent {
        return {
            id: data.id,
            name: data.name
        };
    }
}
