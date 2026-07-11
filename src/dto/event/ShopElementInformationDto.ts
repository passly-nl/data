import { dto } from '@basmilius/http-client';
import { ShopElementDto } from '#data/dto';
import type { ShopElementPage } from '#data/types';

@dto
export class ShopElementInformationDto extends ShopElementDto {
    constructor(id: string, page: ShopElementPage) {
        super(id, 'information', page);
    }
}
