import { dto } from '@basmilius/http-client';
import { PublicShopElementDto } from '#data/dto';
import type { ShopElementPage } from '#data/types';

@dto
export class PublicShopElementInformationDto extends PublicShopElementDto {
    constructor(id: string, page: ShopElementPage) {
        super(id, 'information', page);
    }
}
