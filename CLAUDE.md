# Passly Data — Conventies & Context

## Wat is dit project

Gedeelde TypeScript-package (`@passly-nl/data`) met API-types en service
classes voor het Passly platform. Wordt geconsumeerd door `frontend`
en (potentieel) andere clients. **Pure transport-laag** — geen UI, geen state.

## Tech stack

- **TypeScript** + **Bun** (package manager + scripts).
- **`tsdown`** — build naar `dist/index.mjs` + `dist/index.d.mts`.
- **`@basmilius/http-client`** — HTTP-laag (`BaseService`, `QueryString`,
  `BaseResponse`, `Paginated`).
- **`luxon`** — `DateTime`.
- **`@flux-ui/types`** — gedeelde type-shapes (`FluxFormSelectEntry`,
  `FluxFilterOptionRow`).

## Folder layout

```
src/
├── adapter/      # raw JSON → DTO transformers (per domein)
├── dto/          # @dto decorated classes met getters/setters
├── service/      # HTTP-services per resource (extends BaseService)
├── types/        # pure TypeScript type-unions + enums
├── util/         # helpers (optional, emptyNull, jsonBlob, buildListQuery, ...)
└── index.ts      # re-exports
```

## Conventies

- `.editorconfig`: 4 spaces, LF, UTF-8, final newline.
- Imports: scoped namespaces (`#data/types`, `#data/adapter`, …) via
  `"imports"` in `package.json`.
- Enums: **type unions** (`type OrderRefundStatus = 'not_refunded' | ...`),
  **niet** TypeScript `enum`.
- Services: `export class XxxService extends BaseService` met
  `async`-methods die `BaseResponse<...>` retourneren.
- Adapters: `XxxAdapter.parseXxx(raw): XxxDto` — exporteert via een class met
  static methods.
- Default exports voor util-files; named exports voor services en types.

## Build & verifiëren

- `bun run build` — `tsgo --noEmit && tsdown`. Dit is het enige safety net.
- `bun run dev` — `tsdown --watch`.
- Geen tests in dit project; type-check + downstream consumers zijn de
  garantie.

## Subsysteem-docs

- **Filters & zoeken voor lijst-services** — `docs/filters.md`. Patroon voor
  `ListParams`/`Filters` types, de `buildListQuery` helper, en de
  `getSelectOptions` conventie voor async filter-UI's.

## Werken met andere Passly-projecten

- **`backend`** consumeert dit pakket nooit, maar de **API-contracten**
  hier moeten matchen met wat de backend serveert. Wijzigingen aan service-
  signatures of DTO-shapes coördineren met backend.
- **`frontend`** consumeert dit pakket via npm; bij lokale dev kun je
  via een file/link-dependency direct testen. Na breaking changes hier altijd
  `bun run build` in frontend om type-issues te vangen.
