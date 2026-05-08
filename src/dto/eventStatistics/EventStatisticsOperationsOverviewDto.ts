import { dto } from '@basmilius/http-client';

@dto
export class EventStatisticsOperationsOverviewDto {
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

    get appTeams(): number {
        return this.#appTeams;
    }

    set appTeams(value: number) {
        this.#appTeams = value;
    }

    #totalScans: number;
    #checkins: number;
    #checkouts: number;
    #attendanceRate: number;
    #appTeams: number;

    constructor(totalScans: number, checkins: number, checkouts: number, attendanceRate: number, appTeams: number) {
        this.#totalScans = totalScans;
        this.#checkins = checkins;
        this.#checkouts = checkouts;
        this.#attendanceRate = attendanceRate;
        this.#appTeams = appTeams;
    }
}
