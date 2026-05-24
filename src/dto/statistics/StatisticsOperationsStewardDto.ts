import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOperationsStewardDto {
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

    get scans(): number {
        return this.#scans;
    }

    set scans(value: number) {
        this.#scans = value;
    }

    get checkins(): number {
        return this.#checkins;
    }

    set checkins(value: number) {
        this.#checkins = value;
    }

    get checkouts(): number {
        return this.#checkouts;
    }

    set checkouts(value: number) {
        this.#checkouts = value;
    }

    #id: string;
    #fullName: string;
    #initials: string;
    #scans: number;
    #checkins: number;
    #checkouts: number;

    constructor(id: string, fullName: string, initials: string, scans: number, checkins: number, checkouts: number) {
        this.#id = id;
        this.#fullName = fullName;
        this.#initials = initials;
        this.#scans = scans;
        this.#checkins = checkins;
        this.#checkouts = checkouts;
    }
}
