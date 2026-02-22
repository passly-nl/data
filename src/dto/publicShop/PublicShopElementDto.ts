import type { PublicShopElementType } from '../../types';

export abstract class PublicShopElementDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get type(): PublicShopElementType {
        return this.#type;
    }

    set type(value: PublicShopElementType) {
        this.#type = value;
    }

    #id: string;
    #type: PublicShopElementType;

    protected constructor(id: string, type: PublicShopElementType) {
        this.#id = id;
        this.#type = type;
    }
}
