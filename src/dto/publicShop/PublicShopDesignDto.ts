import { dto } from '@basmilius/http-client';
import type { PictureDto } from '#data/dto';

@dto
export class PublicShopDesignDto {
    get backgroundColor(): string {
        return this.#backgroundColor;
    }

    set backgroundColor(value: string) {
        this.#backgroundColor = value;
    }

    get foregroundColor(): string {
        return this.#foregroundColor;
    }

    set foregroundColor(value: string) {
        this.#foregroundColor = value;
    }

    get primaryColor(): string {
        return this.#primaryColor;
    }

    set primaryColor(value: string) {
        this.#primaryColor = value;
    }

    get background(): PictureDto | null {
        return this.#background;
    }

    set background(value: PictureDto | null) {
        this.#background = value;
    }

    get backgroundScrim(): number {
        return this.#backgroundScrim;
    }

    set backgroundScrim(value: number) {
        this.#backgroundScrim = value;
    }

    #backgroundColor: string;
    #foregroundColor: string;
    #primaryColor: string;
    #background: PictureDto | null;
    #backgroundScrim: number;

    constructor(backgroundColor: string, foregroundColor: string, primaryColor: string, background: PictureDto | null, backgroundScrim: number) {
        this.#backgroundColor = backgroundColor;
        this.#foregroundColor = foregroundColor;
        this.#primaryColor = primaryColor;
        this.#background = background;
        this.#backgroundScrim = backgroundScrim;
    }
}
