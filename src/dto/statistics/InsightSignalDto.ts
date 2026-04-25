import { dto } from '@basmilius/http-client';
import type { InsightSignalKind } from '#data/types';

@dto
export class InsightSignalDto {
    get kind(): InsightSignalKind {
        return this.#kind;
    }

    set kind(value: InsightSignalKind) {
        this.#kind = value;
    }

    get text(): string {
        return this.#text;
    }

    set text(value: string) {
        this.#text = value;
    }

    #kind: InsightSignalKind;
    #text: string;

    constructor(kind: InsightSignalKind, text: string) {
        this.#kind = kind;
        this.#text = text;
    }
}
