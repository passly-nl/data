import { dto } from '@basmilius/http-client';

@dto
export class AiUsageQuotaDto {
    get contractId(): string {
        return this.#contractId;
    }

    set contractId(value: string) {
        this.#contractId = value;
    }

    get bundleKey(): string | null {
        return this.#bundleKey;
    }

    set bundleKey(value: string | null) {
        this.#bundleKey = value;
    }

    get limitTokens(): number | null {
        return this.#limitTokens;
    }

    set limitTokens(value: number | null) {
        this.#limitTokens = value;
    }

    get note(): string | null {
        return this.#note;
    }

    set note(value: string | null) {
        this.#note = value;
    }

    #contractId: string;
    #bundleKey: string | null;
    #limitTokens: number | null;
    #note: string | null;

    constructor(
        contractId: string,
        bundleKey: string | null,
        limitTokens: number | null,
        note: string | null
    ) {
        this.#contractId = contractId;
        this.#bundleKey = bundleKey;
        this.#limitTokens = limitTokens;
        this.#note = note;
    }
}
