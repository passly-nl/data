import { QueryString } from '@basmilius/http-client';
import { DateTime } from 'luxon';
import type { ListParams } from '#data/types';

type QueryValue = string | number | boolean | null;

export default function (params: ListParams, language: string = 'nl'): QueryString {
    const query = QueryString
        .builder()
        .append('language', language)
        .append('offset', params.offset)
        .append('limit', params.limit);

    if (params.search) {
        query.append('q', params.search);
    }

    if (params.filters) {
        for (const [key, value] of Object.entries(params.filters)) {
            if (Array.isArray(value)) {
                query.appendArray(`${key}[]`, value.map(serialize));
            } else if (value !== null && value !== undefined) {
                const serialized = serialize(value);
                if (serialized !== null) {
                    query.append(key, serialized);
                }
            }
        }
    }

    return query;
}

function serialize(value: unknown): QueryValue {
    if (DateTime.isDateTime(value)) {
        return value.toISO();
    }

    if (value === null || value === undefined) {
        return null;
    }

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return value;
    }

    return String(value);
}
