import { dto } from '@basmilius/http-client';
import { type ProductDto, ShopElementDto } from '#data/dto';
import type { ShopElementPage } from '#data/types';

@dto
export class ShopElementProductDto extends ShopElementDto {
    get product(): ProductDto {
        return this.#product;
    }

    set product(value: ProductDto) {
        this.#product = value;
    }

    #product: ProductDto;

    constructor(id: string, page: ShopElementPage, product: ProductDto) {
        super(id, 'product', page);
        this.#product = product;
    }
}
