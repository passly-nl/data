import { adapter, ForeignData } from '@basmilius/http-client';
import { AddressDto } from '../dto';

@adapter
export class AddressAdapter {
    static parseAddress(data: ForeignData): AddressDto {
        return new AddressDto(
            data.id,
            data.label,
            data.street,
            data.number,
            data.postal_code,
            data.city,
            data.country,
            data.formatted
        );
    }
}
