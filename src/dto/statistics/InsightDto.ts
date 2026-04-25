import { dto } from '@basmilius/http-client';
import type { InsightCardType, InsightLanguage, InsightStatus } from '#data/types';
import type { InsightSignalDto } from './InsightSignalDto';

@dto
export class InsightDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get cardType(): InsightCardType {
        return this.#cardType;
    }

    set cardType(value: InsightCardType) {
        this.#cardType = value;
    }

    get language(): InsightLanguage {
        return this.#language;
    }

    set language(value: InsightLanguage) {
        this.#language = value;
    }

    get periodFrom(): string {
        return this.#periodFrom;
    }

    set periodFrom(value: string) {
        this.#periodFrom = value;
    }

    get periodTo(): string {
        return this.#periodTo;
    }

    set periodTo(value: string) {
        this.#periodTo = value;
    }

    get status(): InsightStatus {
        return this.#status;
    }

    set status(value: InsightStatus) {
        this.#status = value;
    }

    get title(): string | null {
        return this.#title;
    }

    set title(value: string | null) {
        this.#title = value;
    }

    get bodyMd(): string | null {
        return this.#bodyMd;
    }

    set bodyMd(value: string | null) {
        this.#bodyMd = value;
    }

    get signals(): InsightSignalDto[] | null {
        return this.#signals;
    }

    set signals(value: InsightSignalDto[] | null) {
        this.#signals = value;
    }

    get payload(): Record<string, unknown> | null {
        return this.#payload;
    }

    set payload(value: Record<string, unknown> | null) {
        this.#payload = value;
    }

    get generatedOn(): string | null {
        return this.#generatedOn;
    }

    set generatedOn(value: string | null) {
        this.#generatedOn = value;
    }

    get isStale(): boolean {
        return this.#isStale;
    }

    set isStale(value: boolean) {
        this.#isStale = value;
    }

    #id: string;
    #cardType: InsightCardType;
    #language: InsightLanguage;
    #periodFrom: string;
    #periodTo: string;
    #status: InsightStatus;
    #title: string | null;
    #bodyMd: string | null;
    #signals: InsightSignalDto[] | null;
    #payload: Record<string, unknown> | null;
    #generatedOn: string | null;
    #isStale: boolean;

    constructor(
        id: string,
        cardType: InsightCardType,
        language: InsightLanguage,
        periodFrom: string,
        periodTo: string,
        status: InsightStatus,
        title: string | null,
        bodyMd: string | null,
        signals: InsightSignalDto[] | null,
        payload: Record<string, unknown> | null,
        generatedOn: string | null,
        isStale: boolean
    ) {
        this.#id = id;
        this.#cardType = cardType;
        this.#language = language;
        this.#periodFrom = periodFrom;
        this.#periodTo = periodTo;
        this.#status = status;
        this.#title = title;
        this.#bodyMd = bodyMd;
        this.#signals = signals;
        this.#payload = payload;
        this.#generatedOn = generatedOn;
        this.#isStale = isStale;
    }
}
