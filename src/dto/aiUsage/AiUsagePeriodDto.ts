import { dto } from '@basmilius/http-client';
import type { AiUsageFeatureStatusDto } from './AiUsageFeatureStatusDto';

@dto
export class AiUsagePeriodDto {
    get periodStart(): string | null {
        return this.#periodStart;
    }

    set periodStart(value: string | null) {
        this.#periodStart = value;
    }

    get periodEnd(): string | null {
        return this.#periodEnd;
    }

    set periodEnd(value: string | null) {
        this.#periodEnd = value;
    }

    get tokensUsed(): number {
        return this.#tokensUsed;
    }

    set tokensUsed(value: number) {
        this.#tokensUsed = value;
    }

    get limitTokens(): number | null {
        return this.#limitTokens;
    }

    set limitTokens(value: number | null) {
        this.#limitTokens = value;
    }

    get percentage(): number {
        return this.#percentage;
    }

    set percentage(value: number) {
        this.#percentage = value;
    }

    get lastEventOn(): string | null {
        return this.#lastEventOn;
    }

    set lastEventOn(value: string | null) {
        this.#lastEventOn = value;
    }

    get features(): AiUsageFeatureStatusDto[] {
        return this.#features;
    }

    set features(value: AiUsageFeatureStatusDto[]) {
        this.#features = value;
    }

    #periodStart: string | null;
    #periodEnd: string | null;
    #tokensUsed: number;
    #limitTokens: number | null;
    #percentage: number;
    #lastEventOn: string | null;
    #features: AiUsageFeatureStatusDto[];

    constructor(
        periodStart: string | null,
        periodEnd: string | null,
        tokensUsed: number,
        limitTokens: number | null,
        percentage: number,
        lastEventOn: string | null,
        features: AiUsageFeatureStatusDto[]
    ) {
        this.#periodStart = periodStart;
        this.#periodEnd = periodEnd;
        this.#tokensUsed = tokensUsed;
        this.#limitTokens = limitTokens;
        this.#percentage = percentage;
        this.#lastEventOn = lastEventOn;
        this.#features = features;
    }
}
