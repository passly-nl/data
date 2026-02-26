import { dto } from '@basmilius/http-client';
import type { FluxIconName } from '@flux-ui/types';
import { ShopElementDto } from '#data/dto';

@dto
export class ShopElementButtonDto extends ShopElementDto {
    get icon(): FluxIconName | null {
        return this.#icon;
    }

    set icon(value: FluxIconName | null) {
        this.#icon = value;
    }

    get text(): string {
        return this.#text;
    }

    set text(value: string) {
        this.#text = value;
    }

    get url(): string {
        return this.#url;
    }

    set url(value: string) {
        this.#url = value;
    }

    #icon: FluxIconName | null;
    #text: string;
    #url: string;

    constructor(id: string, icon: FluxIconName | null, text: string, url: string) {
        super(id, 'button');
        this.#icon = icon;
        this.#text = text;
        this.#url = url;
    }
}
