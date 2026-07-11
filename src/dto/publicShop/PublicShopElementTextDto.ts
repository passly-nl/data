import { dto } from '@basmilius/http-client';
import { PublicShopElementDto } from '#data/dto';
import type { ShopElementPage } from '#data/types';

@dto
export class PublicShopElementTextDto extends PublicShopElementDto {
    get text(): string {
        return this.#text;
    }

    set text(value: string) {
        this.#text = value;
    }

    #text: string;

    constructor(id: string, page: ShopElementPage, text: string) {
        super(id, 'text', page);
        this.#text = text;
    }
}
