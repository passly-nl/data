import { QueryString } from '@basmilius/http-client';
import type { FilterValueSingle, ListParams } from '#data/types';

export default function (params: ListParams, language: string = 'nl'): QueryString {
    const query = QueryString
        .builder()
        .append('language', language)
        .append('offset', params.offset)
        .append('limit', params.limit);

    if (params.search) {
        query.append('search', params.search);
    }

    if (params.filters) {
        for (const [key, value] of Object.entries(params.filters)) {
            if (Array.isArray(value)) {
                query.appendArray(`${key}[]`, value as FilterValueSingle[]);
            } else if (value !== null) {
                query.append(key, value);
            }
        }
    }

    return query;
}
