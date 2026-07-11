import { dto } from '@basmilius/http-client';
import { ShopElementDto } from '#data/dto';
import type { HeadingLevel, ShopElementPage } from '#data/types';

@dto
export class ShopElementHeadingDto extends ShopElementDto {
    get headingLevel(): HeadingLevel {
        return this.#headingLevel;
    }

    set headingLevel(value: HeadingLevel) {
        this.#headingLevel = value;
    }

    get title(): string {
        return this.#title;
    }

    set title(value: string) {
        this.#title = value;
    }

    #headingLevel: HeadingLevel;
    #title: string;

    constructor(id: string, page: ShopElementPage, headingLevel: HeadingLevel, title: string) {
        super(id, 'heading', page);
        this.#headingLevel = headingLevel;
        this.#title = title;
    }
}
