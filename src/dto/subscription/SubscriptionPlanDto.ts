import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';
import type { Feature, SubscriptionType } from '#data/types';

@dto
export class SubscriptionPlanDto {
    get key(): string {
        return this.#key;
    }

    set key(value: string) {
        this.#key = value;
    }

    get type(): SubscriptionType {
        return this.#type;
    }

    set type(value: SubscriptionType) {
        this.#type = value;
    }

    get label(): string {
        return this.#label;
    }

    set label(value: string) {
        this.#label = value;
    }

    get features(): Feature[] {
        return this.#features;
    }

    set features(value: Feature[]) {
        this.#features = value;
    }

    get tokenLimit(): number | null {
        return this.#tokenLimit;
    }

    set tokenLimit(value: number | null) {
        this.#tokenLimit = value;
    }

    get priceMonthly(): CostDto {
        return this.#priceMonthly;
    }

    set priceMonthly(value: CostDto) {
        this.#priceMonthly = value;
    }

    get enabled(): boolean {
        return this.#enabled;
    }

    set enabled(value: boolean) {
        this.#enabled = value;
    }

    #key: string;
    #type: SubscriptionType;
    #label: string;
    #features: Feature[];
    #tokenLimit: number | null;
    #priceMonthly: CostDto;
    #enabled: boolean;

    constructor(key: string, type: SubscriptionType, label: string, features: Feature[], tokenLimit: number | null, priceMonthly: CostDto, enabled: boolean) {
        this.#key = key;
        this.#type = type;
        this.#label = label;
        this.#features = features;
        this.#tokenLimit = tokenLimit;
        this.#priceMonthly = priceMonthly;
        this.#enabled = enabled;
    }
}
