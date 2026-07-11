import type { PublicShopElementType, ShopElementPage } from '#data/types';

export abstract class PublicShopElementDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get page(): ShopElementPage {
        return this.#page;
    }

    set page(value: ShopElementPage) {
        this.#page = value;
    }

    get type(): PublicShopElementType {
        return this.#type;
    }

    set type(value: PublicShopElementType) {
        this.#type = value;
    }

    #id: string;
    #page: ShopElementPage;
    #type: PublicShopElementType;

    protected constructor(id: string, type: PublicShopElementType, page: ShopElementPage) {
        this.#id = id;
        this.#page = page;
        this.#type = type;
    }
}
