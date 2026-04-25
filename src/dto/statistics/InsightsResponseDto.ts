import { dto } from '@basmilius/http-client';
import type { InsightLanguage } from '#data/types';
import type { InsightDto } from './InsightDto';

@dto
export class InsightsResponseDto {
    get insightsEnabled(): boolean {
        return this.#insightsEnabled;
    }

    set insightsEnabled(value: boolean) {
        this.#insightsEnabled = value;
    }

    get language(): InsightLanguage {
        return this.#language;
    }

    set language(value: InsightLanguage) {
        this.#language = value;
    }

    get cards(): InsightDto[] {
        return this.#cards;
    }

    set cards(value: InsightDto[]) {
        this.#cards = value;
    }

    #insightsEnabled: boolean;
    #language: InsightLanguage;
    #cards: InsightDto[];

    constructor(insightsEnabled: boolean, language: InsightLanguage, cards: InsightDto[]) {
        this.#insightsEnabled = insightsEnabled;
        this.#language = language;
        this.#cards = cards;
    }
}
