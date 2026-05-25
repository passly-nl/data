# Filters & zoeken voor lijst-services (passly-data)

`passly-data` is **transport-laag**. Het kent de specifieke filter-keys per
endpoint **niet** — de backend bepaalt welke keys geldig zijn, de frontend bouwt
de UI. Dit pakket levert alleen:

1. Generieke types (`Filters`, `ListParams`).
2. Een serializer (`buildListQuery`) die `ListParams` omzet naar een
   `QueryString` voor het HTTP-request.
3. Een service-signature-conventie voor paginated `get(...)` methods.

## 1. Types — `src/types/list.ts`

```ts
export type FilterValueSingle = string | number | boolean | null;
export type FilterValue = FilterValueSingle | FilterValueSingle[];
export type Filters = Record<string, FilterValue>;

export type ListParams = {
    readonly offset: number;
    readonly limit: number;
    readonly filters?: Filters;
    readonly search?: string;
};
```

- `Filters` is open op key — elk endpoint heeft zijn eigen toegestane keys, en
  die kennis hoort in de frontend (zie `passly-frontend/docs/filters.md`) en de
  backend (zie `passly-backend/docs/filters.md`).
- `search` staat los van `filters` zodat de backend het semantisch apart kan
  behandelen (eigen LIKE-pad in `Model::applySearch`).

## 2. Serializer — `src/util/buildListQuery.ts`

Zet een `ListParams` om naar een `QueryString`. Arrays worden ge-encodeerd met
`key[]=v1&key[]=v2` zodat de backend ze met `parse_str` als native PHP array
leest. `null` wordt geskipt.

```ts
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
```

## 3. Service-conventie

Een paginated `get` accepteert één `ListParams`-object — geen losse `offset`,
`limit`, `filter`, `search` parameters. Resource-specifieke required params
(zoals `merchantId`) komen ervóór.

```ts
// src/service/MerchantOrdersService.ts
export class MerchantOrdersService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<OrderDto>>> {
        return await this
            .request(`/merchants/${merchantId}/orders`)
            .method('get')
            .queryString(buildListQuery(params))
            .bearerToken()
            .runPaginatedAdapter(OrderAdapter.parseOrder);
    }
}
```

### Async select-options endpoint

Voor filter-UI's met type-ahead bouwt elke resource een `getSelectOptions`. Het
patroon is *niet* het generieke `ListParams` — het is een dedicated method per
domein omdat de response anders is (`FluxFormSelectEntry[]`):

```ts
async getSelectOptions(
    merchantId: string,
    searchQuery: string | null = null,
    ids: string[] | null = null
): Promise<BaseResponse<FluxFormSelectEntry[]>> {
    return await this
        .request(`/merchants/${merchantId}/events/select-options`)
        .method('get')
        .queryString(QueryString.builder()
            .append('language', 'nl')
            .appendArray('ids[]', ids)
            .append('searchQuery', searchQuery))
        .bearerToken()
        .runArrayAdapter(FluxAdapter.parseFluxFormSelectEntry);
}
```

- `ids` levert de exact-match-lookup voor `fetchOptions(ids)` van Flux (de
  chip-tekst van het geselecteerde item).
- `searchQuery` levert de type-ahead resultaten.
- Beide weglaten → backend kiest een sane default (in onze backend: top 5 op
  startdatum voor events).

## 4. Een nieuwe lijst-endpoint client toevoegen — checklist

1. Open de bestaande `*Service.ts` voor de resource (bv.
   `MerchantTicketsService.ts`).
2. Zorg dat `get(...)` de signature `(...keys, params: ListParams):
   Promise<BaseResponse<Paginated<XxxDto>>>` heeft. Verwijder losse `offset`,
   `limit`, `filter` parameters.
3. Implementeer met `buildListQuery(params)` voor de query string.
4. Voor filter-UI met type-ahead: voeg `getSelectOptions` toe volgens het
   bovenstaande patroon. Voeg ook een `toSelectOption` static method toe aan
   het bijbehorende backend-model.
5. Geen wijzigingen aan `src/types/list.ts` of `src/util/buildListQuery.ts`
   nodig — die zijn generiek.

## 5. Verwijzingen

- `src/types/list.ts` — types
- `src/util/buildListQuery.ts` — serializer
- `src/service/MerchantOrdersService.ts` — canonical lijst-service
- `src/service/MerchantEventsService.ts` (`getSelectOptions`) — canonical
  async select-options
- `src/service/MerchantEventStockPoolsService.ts` (`getSelectOptions`) — extra
  voorbeeld
