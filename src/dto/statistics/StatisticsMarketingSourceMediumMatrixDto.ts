import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsMarketingSourceMediumMatrixDto {
    get sources(): readonly string[] {
        return this.#sources;
    }

    set sources(value: readonly string[]) {
        this.#sources = value;
    }

    get mediums(): readonly string[] {
        return this.#mediums;
    }

    set mediums(value: readonly string[]) {
        this.#mediums = value;
    }

    get cells(): readonly (readonly CostDto[])[] {
        return this.#cells;
    }

    set cells(value: readonly (readonly CostDto[])[]) {
        this.#cells = value;
    }

    #sources: readonly string[];
    #mediums: readonly string[];
    #cells: readonly (readonly CostDto[])[];

    constructor(sources: readonly string[], mediums: readonly string[], cells: readonly (readonly CostDto[])[]) {
        this.#sources = sources;
        this.#mediums = mediums;
        this.#cells = cells;
    }
}
