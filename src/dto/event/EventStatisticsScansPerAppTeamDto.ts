import { dto } from '@basmilius/http-client';

@dto
export class EventStatisticsScansPerAppTeamDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get scans(): number {
        return this.#scans;
    }

    set scans(value: number) {
        this.#scans = value;
    }

    #id: string;
    #name: string;
    #scans: number;

    constructor(id: string, name: string, scans: number) {
        this.#id = id;
        this.#name = name;
        this.#scans = scans;
    }
}
