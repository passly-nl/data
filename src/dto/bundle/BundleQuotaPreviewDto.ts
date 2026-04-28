import { dto } from '@basmilius/http-client';

@dto
export class BundleQuotaPreviewDto {
    get limitTokens(): number | null {
        return this.#limitTokens;
    }

    set limitTokens(value: number | null) {
        this.#limitTokens = value;
    }

    #limitTokens: number | null;

    constructor(limitTokens: number | null) {
        this.#limitTokens = limitTokens;
    }
}
