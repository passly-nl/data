import { dto } from '@basmilius/http-client';
import { PublicShopElementDto, type PublicShopProductDto } from '../../dto';

@dto
export class PublicShopElementProductDto extends PublicShopElementDto {
    get product(): PublicShopProductDto {
        return this.#product;
    }

    set product(value: PublicShopProductDto) {
        this.#product = value;
    }

    #product: PublicShopProductDto;

    constructor(id: string, product: PublicShopProductDto) {
        super(id, 'product');
        this.#product = product;
    }
}
