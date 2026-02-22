import { dto } from '@basmilius/http-client';
import { ShopElementDto } from '../../dto';
import type { HeadingLevel } from '../../types';

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

    constructor(id: string, headingLevel: HeadingLevel, title: string) {
        super(id, 'heading');
        this.#headingLevel = headingLevel;
        this.#title = title;
    }
}
