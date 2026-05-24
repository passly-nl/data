import { dto } from '@basmilius/http-client';

@dto
export class StatisticsBuyersCohortRetentionDto {
    get cohorts(): readonly string[] {
        return this.#cohorts;
    }

    set cohorts(value: readonly string[]) {
        this.#cohorts = value;
    }

    get buckets(): readonly string[] {
        return this.#buckets;
    }

    set buckets(value: readonly string[]) {
        this.#buckets = value;
    }

    get cohortSizes(): readonly number[] {
        return this.#cohortSizes;
    }

    set cohortSizes(value: readonly number[]) {
        this.#cohortSizes = value;
    }

    get cells(): readonly (readonly (number | null)[])[] {
        return this.#cells;
    }

    set cells(value: readonly (readonly (number | null)[])[]) {
        this.#cells = value;
    }

    #cohorts: readonly string[];
    #buckets: readonly string[];
    #cohortSizes: readonly number[];
    #cells: readonly (readonly (number | null)[])[];

    constructor(cohorts: readonly string[], buckets: readonly string[], cohortSizes: readonly number[], cells: readonly (readonly (number | null)[])[]) {
        this.#cohorts = cohorts;
        this.#buckets = buckets;
        this.#cohortSizes = cohortSizes;
        this.#cells = cells;
    }
}
