import { dto } from '@basmilius/http-client';

@dto
export class StatisticsOperationsOverviewDto {
    get totalScans(): number {
        return this.#totalScans;
    }

    set totalScans(value: number) {
        this.#totalScans = value;
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

    get attendanceRate(): number {
        return this.#attendanceRate;
    }

    set attendanceRate(value: number) {
        this.#attendanceRate = value;
    }

    get liveEvents(): number {
        return this.#liveEvents;
    }

    set liveEvents(value: number) {
        this.#liveEvents = value;
    }

    #totalScans: number;
    #checkins: number;
    #checkouts: number;
    #attendanceRate: number;
    #liveEvents: number;

    constructor(totalScans: number, checkins: number, checkouts: number, attendanceRate: number, liveEvents: number) {
        this.#totalScans = totalScans;
        this.#checkins = checkins;
        this.#checkouts = checkouts;
        this.#attendanceRate = attendanceRate;
        this.#liveEvents = liveEvents;
    }
}
