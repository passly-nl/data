import { dto } from '@basmilius/http-client';
import type { Feature } from '#data/types';

@dto
export class AiUsageFeatureStatusDto {
    get feature(): Feature {
        return this.#feature;
    }

    set feature(value: Feature) {
        this.#feature = value;
    }

    get enabled(): boolean {
        return this.#enabled;
    }

    set enabled(value: boolean) {
        this.#enabled = value;
    }

    get tokensUsed(): number {
        return this.#tokensUsed;
    }

    set tokensUsed(value: number) {
        this.#tokensUsed = value;
    }

    #feature: Feature;
    #enabled: boolean;
    #tokensUsed: number;

    constructor(feature: Feature, enabled: boolean, tokensUsed: number) {
        this.#feature = feature;
        this.#enabled = enabled;
        this.#tokensUsed = tokensUsed;
    }
}
