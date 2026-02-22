import type { ShopElementType } from '#data/types';

export abstract class ShopElementDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get type(): ShopElementType {
        return this.#type;
    }

    set type(value: ShopElementType) {
        this.#type = value;
    }

    #id: string;
    #type: ShopElementType;

    protected constructor(id: string, type: ShopElementType) {
        this.#id = id;
        this.#type = type;
    }
}
