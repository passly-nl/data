import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { ContractFeature } from '#data/types';

@dto
export class AiUsageDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get feature(): ContractFeature {
        return this.#feature;
    }

    set feature(value: ContractFeature) {
        this.#feature = value;
    }

    get operation(): string {
        return this.#operation;
    }

    set operation(value: string) {
        this.#operation = value;
    }

    get model(): string {
        return this.#model;
    }

    set model(value: string) {
        this.#model = value;
    }

    get promptTokens(): number {
        return this.#promptTokens;
    }

    set promptTokens(value: number) {
        this.#promptTokens = value;
    }

    get cachedTokens(): number {
        return this.#cachedTokens;
    }

    set cachedTokens(value: number) {
        this.#cachedTokens = value;
    }

    get outputTokens(): number {
        return this.#outputTokens;
    }

    set outputTokens(value: number) {
        this.#outputTokens = value;
    }

    get referenceClass(): string | null {
        return this.#referenceClass;
    }

    set referenceClass(value: string | null) {
        this.#referenceClass = value;
    }

    get referenceId(): string | null {
        return this.#referenceId;
    }

    set referenceId(value: string | null) {
        this.#referenceId = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    #id: string;
    #feature: ContractFeature;
    #operation: string;
    #model: string;
    #promptTokens: number;
    #cachedTokens: number;
    #outputTokens: number;
    #referenceClass: string | null;
    #referenceId: string | null;
    #createdOn: DateTime;

    constructor(id: string, feature: ContractFeature, operation: string, model: string, promptTokens: number, cachedTokens: number, outputTokens: number, referenceClass: string | null, referenceId: string | null, createdOn: DateTime) {
        this.#id = id;
        this.#feature = feature;
        this.#operation = operation;
        this.#model = model;
        this.#promptTokens = promptTokens;
        this.#cachedTokens = cachedTokens;
        this.#outputTokens = outputTokens;
        this.#referenceClass = referenceClass;
        this.#referenceId = referenceId;
        this.#createdOn = createdOn;
    }
}
