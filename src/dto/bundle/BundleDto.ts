import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';
import type { ContractFeature } from '#data/types';
import type { BundleQuotaPreviewDto } from './BundleQuotaPreviewDto';

@dto
export class BundleDto {
    get key(): string {
        return this.#key;
    }

    set key(value: string) {
        this.#key = value;
    }

    get label(): string {
        return this.#label;
    }

    set label(value: string) {
        this.#label = value;
    }

    get features(): ContractFeature[] {
        return this.#features;
    }

    set features(value: ContractFeature[]) {
        this.#features = value;
    }

    get quota(): BundleQuotaPreviewDto | null {
        return this.#quota;
    }

    set quota(value: BundleQuotaPreviewDto | null) {
        this.#quota = value;
    }

    get priceMonthly(): CostDto {
        return this.#priceMonthly;
    }

    set priceMonthly(value: CostDto) {
        this.#priceMonthly = value;
    }

    #key: string;
    #label: string;
    #features: ContractFeature[];
    #quota: BundleQuotaPreviewDto | null;
    #priceMonthly: CostDto;

    constructor(
        key: string,
        label: string,
        features: ContractFeature[],
        quota: BundleQuotaPreviewDto | null,
        priceMonthly: CostDto
    ) {
        this.#key = key;
        this.#label = label;
        this.#features = features;
        this.#quota = quota;
        this.#priceMonthly = priceMonthly;
    }
}
