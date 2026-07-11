import { dto } from '@basmilius/http-client';
import type { FluxIconName } from '@flux-ui/types';
import { ShopElementDto } from '#data/dto';
import type { ShopElementPage } from '#data/types';

@dto
export class ShopElementDividerDto extends ShopElementDto {
    get icon(): FluxIconName | null {
        return this.#icon;
    }

    set icon(value: FluxIconName | null) {
        this.#icon = value;
    }

    get text(): string | null {
        return this.#text;
    }

    set text(value: string | null) {
        this.#text = value;
    }

    #icon: FluxIconName | null;
    #text: string | null;

    constructor(id: string, page: ShopElementPage, icon: FluxIconName | null, text: string | null) {
        super(id, 'divider', page);
        this.#icon = icon;
        this.#text = text;
    }
}
