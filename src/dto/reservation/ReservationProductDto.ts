import { dto } from '@basmilius/http-client';
import type { CostDto, PictureDto } from '#data/dto';
import type { ProductType } from '#data/types';

@dto
export class ReservationProductDto {
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

    get price(): CostDto {
        return this.#price;
    }

    set price(value: CostDto) {
        this.#price = value;
    }

    get type(): ProductType {
        return this.#type;
    }

    set type(value: ProductType) {
        this.#type = value;
    }

    #id: string;
    #name: string;
    #description: string;
    #image: PictureDto | null;
    #price: CostDto;
    #type: ProductType;

    constructor(id: string, name: string, description: string, image: PictureDto | null, price: CostDto, type: ProductType) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#image = image;
        this.#price = price;
        this.#type = type;
    }
}
