import { dto } from '@basmilius/http-client';
import type { ContractFeature } from '#data/types';

@dto
export class AiUsageFeatureStatusDto {
    get feature(): ContractFeature {
        return this.#feature;
    }

    set feature(value: ContractFeature) {
        this.#feature = value;
    }

    get enabled(): boolean {
        return this.#enabled;
    }

    set enabled(value: boolean) {
        this.#enabled = value;
    }

    #feature: ContractFeature;
    #enabled: boolean;

    constructor(
        feature: ContractFeature,
        enabled: boolean
    ) {
        this.#feature = feature;
        this.#enabled = enabled;
    }
}
