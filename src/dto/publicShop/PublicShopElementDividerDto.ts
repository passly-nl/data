import { dto } from '@basmilius/http-client';
import type { FluxIconName } from '@flux-ui/types';
import { PublicShopElementDto } from '#data/dto';

@dto
export class PublicShopElementDividerDto extends PublicShopElementDto {
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

    constructor(id: string, icon: FluxIconName | null, text: string | null) {
        super(id, 'divider');
        this.#icon = icon;
        this.#text = text;
    }
}
