import { dto } from '@basmilius/http-client';
import type { PictureDto } from '#data/dto';

@dto
export class PublicShopReservationProductDetailsDto {
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

    get image(): PictureDto {
        return this.#image;
    }

    set image(value: PictureDto) {
        this.#image = value;
    }

    #id: string;
    #name: string;
    #description: string;
    #image: PictureDto;

    constructor(id: string, name: string, description: string, image: PictureDto) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#image = image;
    }
}
