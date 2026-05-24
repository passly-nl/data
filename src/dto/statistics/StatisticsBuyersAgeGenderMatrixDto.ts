import { dto } from '@basmilius/http-client';

@dto
export class StatisticsBuyersAgeGenderMatrixDto {
    get ageGroups(): readonly string[] {
        return this.#ageGroups;
    }

    set ageGroups(value: readonly string[]) {
        this.#ageGroups = value;
    }

    get genders(): readonly string[] {
        return this.#genders;
    }

    set genders(value: readonly string[]) {
        this.#genders = value;
    }

    get cells(): readonly (readonly number[])[] {
        return this.#cells;
    }

    set cells(value: readonly (readonly number[])[]) {
        this.#cells = value;
    }

    #ageGroups: readonly string[];
    #genders: readonly string[];
    #cells: readonly (readonly number[])[];

    constructor(ageGroups: readonly string[], genders: readonly string[], cells: readonly (readonly number[])[]) {
        this.#ageGroups = ageGroups;
        this.#genders = genders;
        this.#cells = cells;
    }
}
