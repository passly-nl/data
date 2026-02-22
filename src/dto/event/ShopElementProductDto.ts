import { dto } from '@basmilius/http-client';
import { type ProductDto, ShopElementDto } from '../../dto';

@dto
export class ShopElementProductDto extends ShopElementDto {
    get product(): ProductDto {
        return this.#product;
    }

    set product(value: ProductDto) {
        this.#product = value;
    }

    #product: ProductDto;

    constructor(id: string, product: ProductDto) {
        super(id, 'product');
        this.#product = product;
    }
}
