import { dto } from '@basmilius/http-client';

@dto
export class PictureDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get url(): string {
        return this.#url;
    }

    set url(value: string) {
        this.#url = value;
    }

    get variants(): Record<'large' | 'medium' | 'thumb', string> {
        return this.#variants;
    }

    set variants(value: Record<'large' | 'medium' | 'thumb', string>) {
        this.#variants = value;
    }

    #id: string;
    #url: string;
    #variants: Record<'large' | 'medium' | 'thumb', string>;

    constructor(id: string, url: string, variants: Record<'large' | 'medium' | 'thumb', string>) {
        this.#id = id;
        this.#url = url;
        this.#variants = variants;
    }
}
