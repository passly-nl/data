import { dto } from '@basmilius/http-client';
import type { PictureDto } from '#data/dto';

@dto
export class OrderProductDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get description(): string {
        return this.#description;
    }

    set description(value: string) {
        this.#description = value;
    }

    get image(): PictureDto | null {
        return this.#image;
    }

    set image(value: PictureDto | null) {
        this.#image = value;
    }

    #id: string;
    #name: string;
    #description: string;
    #image: PictureDto | null;

    constructor(id: string, name: string, description: string, image: PictureDto | null) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#image = image;
    }
}
