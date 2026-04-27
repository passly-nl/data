import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOperationsTaskAssigneeDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get fullName(): string {
        return this.#fullName;
    }

    set fullName(value: string) {
        this.#fullName = value;
    }

    get initials(): string {
        return this.#initials;
    }

    set initials(value: string) {
        this.#initials = value;
    }

    get resolvedCount(): number {
        return this.#resolvedCount;
    }

    set resolvedCount(value: number) {
        this.#resolvedCount = value;
    }

    #id: string;
    #fullName: string;
    #initials: string;
    #resolvedCount: number;

    constructor(id: string, fullName: string, initials: string, resolvedCount: number) {
        this.#id = id;
        this.#fullName = fullName;
        this.#initials = initials;
        this.#resolvedCount = resolvedCount;
    }
}
