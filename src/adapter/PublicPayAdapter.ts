import { adapter } from '@basmilius/http-client';
import { PublicPaymentMethodDto } from '../dto';

@adapter
export class PublicPayAdapter {
    static parsePublicPaymentMethodFromObject(method: Record<string, any>): PublicPaymentMethodDto {
        return new PublicPaymentMethodDto(
            method.id,
            method.name,
            method.image
        );
    }
}
