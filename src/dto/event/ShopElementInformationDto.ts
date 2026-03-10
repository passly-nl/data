import { dto } from '@basmilius/http-client';
import { ShopElementDto } from '#data/dto';

@dto
export class ShopElementInformationDto extends ShopElementDto {
    constructor(id: string) {
        super(id, 'information');
    }
}
