import { adapter } from '@basmilius/http-client';
import { AddressDto } from '#data/dto';

@adapter
export class AddressAdapter {
    static parseAddressFromObject(address: Record<string, any>) {
        return new AddressDto(
            address.id,
            address.label,
            address.street,
            address.number,
            address.postal_code,
            address.city,
            address.country,
            address.formatted
        );
    }
}
