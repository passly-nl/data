import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { AiUsageFeatureStatusDto } from './AiUsageFeatureStatusDto';

@dto
export class AiUsagePeriodDto {
    get periodStart(): DateTime | null {
        return this.#periodStart;
    }

    set periodStart(value: DateTime | null) {
        this.#periodStart = value;
    }

    get periodEnd(): DateTime | null {
        return this.#periodEnd;
    }

    set periodEnd(value: DateTime | null) {
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

    get lastEventOn(): DateTime | null {
        return this.#lastEventOn;
    }

    set lastEventOn(value: DateTime | null) {
        this.#lastEventOn = value;
    }

    get features(): AiUsageFeatureStatusDto[] {
        return this.#features;
    }

    set features(value: AiUsageFeatureStatusDto[]) {
        this.#features = value;
    }

    #periodStart: DateTime | null;
    #periodEnd: DateTime | null;
    #tokensUsed: number;
    #limitTokens: number | null;
    #percentage: number;
    #lastEventOn: DateTime | null;
    #features: AiUsageFeatureStatusDto[];

    constructor(periodStart: DateTime | null, periodEnd: DateTime | null, tokensUsed: number, limitTokens: number | null, percentage: number, lastEventOn: DateTime | null, features: AiUsageFeatureStatusDto[]) {
        this.#periodStart = periodStart;
        this.#periodEnd = periodEnd;
        this.#tokensUsed = tokensUsed;
        this.#limitTokens = limitTokens;
        this.#percentage = percentage;
        this.#lastEventOn = lastEventOn;
        this.#features = features;
    }
}
