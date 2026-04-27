import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOperationsAppTeamDto {
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

    get eventId(): string {
        return this.#eventId;
    }

    set eventId(value: string) {
        this.#eventId = value;
    }

    get eventName(): string {
        return this.#eventName;
    }

    set eventName(value: string) {
        this.#eventName = value;
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
    #name: string;
    #eventId: string;
    #eventName: string;
    #scans: number;
    #checkins: number;
    #checkouts: number;

    constructor(id: string, name: string, eventId: string, eventName: string, scans: number, checkins: number, checkouts: number) {
        this.#id = id;
        this.#name = name;
        this.#eventId = eventId;
        this.#eventName = eventName;
        this.#scans = scans;
        this.#checkins = checkins;
        this.#checkouts = checkouts;
    }
}
