import type { DateTime } from 'luxon';

export type FilterValueSingle = string | number | boolean | DateTime | null;
export type FilterValue = FilterValueSingle | FilterValueSingle[];
export type Filters = Record<string, FilterValue>;

export type ListParams = {
    readonly offset: number;
    readonly limit: number;
    readonly filters?: Filters;
    readonly search?: string;
};
