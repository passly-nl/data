import { dto } from '@basmilius/http-client';
import { PublicShopElementDto } from '../../dto';

@dto
export class PublicShopElementTextDto extends PublicShopElementDto {
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
