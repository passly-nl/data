import { dto } from '@basmilius/http-client';
import { PublicShopElementDto, type PublicShopProductDto } from '#data/dto';
import type { ShopElementPage } from '#data/types';

@dto
export class PublicShopElementProductDto extends PublicShopElementDto {
    get product(): PublicShopProductDto {
        return this.#product;
    }

    set product(value: PublicShopProductDto) {
        this.#product = value;
    }

    #product: PublicShopProductDto;

    constructor(id: string, page: ShopElementPage, product: PublicShopProductDto) {
        super(id, 'product', page);
        this.#product = product;
    }
}
