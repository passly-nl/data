import { adapter, ForeignData } from '@basmilius/http-client';
import { PublicPaymentMethodDto } from '../dto';

@adapter
export class PublicPayAdapter {
    static parsePublicPaymentMethod(data: ForeignData): PublicPaymentMethodDto {
        return new PublicPaymentMethodDto(
            data.id,
            data.name,
            data.image
        );
    }
}
