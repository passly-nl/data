import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto, PictureDto, StockPoolDto } from '#data/dto';
import type { ProductType } from '#data/types';

@dto
export class ProductDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get type(): ProductType {
        return this.#type;
    }

    set type(value: ProductType) {
        this.#type = value;
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

    get price(): CostDto {
        return this.#price;
    }

    set price(value: CostDto) {
        this.#price = value;
    }

    get maxQuantity(): number {
        return this.#maxQuantity;
    }

    set maxQuantity(value: number) {
        this.#maxQuantity = value;
    }

    get isActive(): boolean {
        return this.#isActive;
    }

    set isActive(value: boolean) {
        this.#isActive = value;
    }

    get isSwappable(): boolean {
        return this.#isSwappable;
    }

    set isSwappable(value: boolean) {
        this.#isSwappable = value;
    }

    get remainingStock(): number {
        return this.#remainingStock;
    }

    set remainingStock(value: number) {
        this.#remainingStock = value;
    }

    get stock(): StockPoolDto {
        return this.#stock;
    }

    set stock(value: StockPoolDto) {
        this.#stock = value;
    }

    get image(): PictureDto {
        return this.#image;
    }

    set image(value: PictureDto) {
        this.#image = value;
    }

    get images(): PictureDto[] {
        return this.#images;
    }

    set images(value: PictureDto[]) {
        this.#images = value;
    }

    get ticketsReleasedOn(): DateTime | null {
        return this.#ticketsReleasedOn;
    }

    set ticketsReleasedOn(value: DateTime | null) {
        this.#ticketsReleasedOn = value;
    }

    #id: string;
    #type: ProductType;
    #name: string;
    #description: string;
    #price: CostDto;
    #maxQuantity: number;
    #isActive: boolean;
    #isSwappable: boolean;
    #remainingStock: number;
    #stock: StockPoolDto;
    #image: PictureDto;
    #images: PictureDto[];
    #ticketsReleasedOn: DateTime | null;

    constructor(id: string, type: ProductType, name: string, description: string, price: CostDto, maxQuantity: number, isActive: boolean, isSwappable: boolean, remainingStock: number, stock: StockPoolDto, image: PictureDto, images: PictureDto[], ticketsReleasedOn: DateTime | null) {
        this.#id = id;
        this.#type = type;
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#maxQuantity = maxQuantity;
        this.#isActive = isActive;
        this.#isSwappable = isSwappable;
        this.#remainingStock = remainingStock;
        this.#stock = stock;
        this.#image = image;
        this.#images = images;
        this.#ticketsReleasedOn = ticketsReleasedOn;
    }
}
