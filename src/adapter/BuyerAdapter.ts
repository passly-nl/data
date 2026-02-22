import { adapter } from '@basmilius/http-client';
import { AddressAdapter, DateTimeAdapter } from '../adapter';
import { BuyerDto } from '../dto';
import { optional } from '../util';

@adapter
export class BuyerAdapter {
    static parseBuyerFromObject(buyer: Record<string, any>): BuyerDto {
        return new BuyerDto(
            buyer.id,
            buyer.first_name,
            buyer.last_name,
            buyer.email,
            buyer.phone_number,
            optional(buyer.date_of_birth, DateTimeAdapter.parseDateTimeFromString),
            buyer.gender,
            buyer.order_count ?? -1,
            buyer.full_name,
            optional(buyer.address, AddressAdapter.parseAddressFromObject)
        );
    }
}
