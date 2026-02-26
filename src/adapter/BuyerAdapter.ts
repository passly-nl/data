import { adapter, ForeignData } from '@basmilius/http-client';
import { AddressAdapter, DateTimeAdapter } from '../adapter';
import { BuyerDto } from '../dto';
import { optional } from '../util';

@adapter
export class BuyerAdapter {
    static parseBuyer(data: ForeignData): BuyerDto {
        return new BuyerDto(
            data.id,
            data.first_name,
            data.last_name,
            data.email,
            data.phone_number,
            optional(data.date_of_birth, DateTimeAdapter.parseDateTime),
            data.gender,
            data.order_count ?? -1,
            data.full_name,
            optional(data.address, AddressAdapter.parseAddress)
        );
    }
}
