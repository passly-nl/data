import { dto } from '@basmilius/http-client';
import type { PictureDto, ProductDto } from '#data/dto';
import type { TicketTemplateType } from '#data/types';

@dto
export class TicketTemplateDto {
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

    get product(): ProductDto | null {
        return this.#product;
    }

    set product(value: ProductDto | null) {
        this.#product = value;
    }

    get productId(): string | null {
        return this.#productId;
    }

    set productId(value: string | null) {
        this.#productId = value;
    }

    get variant(): TicketTemplateType {
        return this.#variant;
    }

    set variant(value: TicketTemplateType) {
        this.#variant = value;
    }

    get visual(): PictureDto | null {
        return this.#visual;
    }

    set visual(value: PictureDto | null) {
        this.#visual = value;
    }

    #id: string;
    #name: string;
    #product: ProductDto | null;
    #productId: string | null;
    #variant: TicketTemplateType;
    #visual: PictureDto | null;

    constructor(id: string, name: string, product: ProductDto, productId: string | null, variant: TicketTemplateType, visual: PictureDto | null) {
        this.#id = id;
        this.#name = name;
        this.#product = product;
        this.#productId = productId;
        this.#variant = variant;
        this.#visual = visual;
    }
}
