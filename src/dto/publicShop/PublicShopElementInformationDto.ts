import { dto } from '@basmilius/http-client';
import { PublicShopElementDto } from '#data/dto';

@dto
export class PublicShopElementInformationDto extends PublicShopElementDto {
    constructor(id: string) {
        super(id, 'information');
    }
}
