import { dto } from '@basmilius/http-client';

@dto
export class EventAvailabilityDto {
    get hasProducts(): boolean {
        return this.#hasProducts;
    }

    set hasProducts(value: boolean) {
        this.#hasProducts = value;
    }

    get hasShops(): boolean {
        return this.#hasShops;
    }

    set hasShops(value: boolean) {
        this.#hasShops = value;
    }

    get hasShopsWithProducts(): boolean {
        return this.#hasShopsWithProducts;
    }

    set hasShopsWithProducts(value: boolean) {
        this.#hasShopsWithProducts = value;
    }

    get isPublishable(): boolean {
        return this.#isPublishable;
    }

    set isPublishable(value: boolean) {
        this.#isPublishable = value;
    }

    get isPublished(): boolean {
        return this.#isPublished;
    }

    set isPublished(value: boolean) {
        this.#isPublished = value;
    }

    #hasProducts: boolean;
    #hasShops: boolean;
    #hasShopsWithProducts: boolean;
    #isPublishable: boolean;
    #isPublished: boolean;

    constructor(hasProducts: boolean, hasShops: boolean, hasShopsWithProducts: boolean, isPublishable: boolean, isPublished: boolean) {
        this.#hasProducts = hasProducts;
        this.#hasShops = hasShops;
        this.#hasShopsWithProducts = hasShopsWithProducts;
        this.#isPublishable = isPublishable;
        this.#isPublished = isPublished;
    }
}
