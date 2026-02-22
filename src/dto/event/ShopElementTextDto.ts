import { dto } from '@basmilius/http-client';
import { ShopElementDto } from '../../dto';

@dto
export class ShopElementTextDto extends ShopElementDto {
    get text(): string {
        return this.#text;
    }

    set text(value: string) {
        this.#text = value;
    }

    #text: string;

    constructor(id: string, text: string) {
        super(id, 'text');
        this.#text = text;
    }
}
