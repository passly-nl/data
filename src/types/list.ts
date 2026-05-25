export type FilterValueSingle = string | number | boolean | null;
export type FilterValue = FilterValueSingle | FilterValueSingle[];
export type Filters = Record<string, FilterValue>;

export type ListParams = {
    readonly offset: number;
    readonly limit: number;
    readonly filters?: Filters;
    readonly search?: string;
};
