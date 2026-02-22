import { dto } from '@basmilius/http-client';
import type { CostDto, PictureDto, PublicShopTimeSlotDto } from '../../dto';
import type { ProductType } from '../../types';

@dto
export class PublicShopProductDto {
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

    get isTimeslotted(): boolean {
        return this.#isTimeslotted;
    }

    set isTimeslotted(value: boolean) {
        this.#isTimeslotted = value;
    }

    get timeSlots(): PublicShopTimeSlotDto[] {
        return this.#timeSlots;
    }

    set timeSlots(value: PublicShopTimeSlotDto[]) {
        this.#timeSlots = value;
    }

    get image(): PictureDto | null {
        return this.#image;
    }

    set image(value: PictureDto | null) {
        this.#image = value;
    }

    get images(): PictureDto[] {
        return this.#images;
    }

    set images(value: PictureDto[]) {
        this.#images = value;
    }

    #id: string;
    #type: ProductType;
    #name: string;
    #description: string;
    #price: CostDto;
    #maxQuantity: number;
    #isActive: boolean;
    #isTimeslotted: boolean;
    #timeSlots: PublicShopTimeSlotDto[];
    #image: PictureDto | null;
    #images: PictureDto[];

    constructor(id: string, type: ProductType, name: string, description: string, price: CostDto, maxQuantity: number, isActive: boolean, isTimeslotted: boolean, timeSlots: PublicShopTimeSlotDto[], image: PictureDto | null, images: PictureDto[]) {
        this.#id = id;
        this.#type = type;
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#maxQuantity = maxQuantity;
        this.#isActive = isActive;
        this.#isTimeslotted = isTimeslotted;
        this.#timeSlots = timeSlots;
        this.#image = image;
        this.#images = images;
    }
}
