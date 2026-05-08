import { dto } from '@basmilius/http-client';

@dto
export class EventStatisticsAttendanceDto {
    get attended(): number {
        return this.#attended;
    }

    set attended(value: number) {
        this.#attended = value;
    }

    get expected(): number {
        return this.#expected;
    }

    set expected(value: number) {
        this.#expected = value;
    }

    get rate(): number {
        return this.#rate;
    }

    set rate(value: number) {
        this.#rate = value;
    }

    #attended: number;
    #expected: number;
    #rate: number;

    constructor(attended: number, expected: number, rate: number) {
        this.#attended = attended;
        this.#expected = expected;
        this.#rate = rate;
    }
}
