import { dto } from '@basmilius/http-client';
import type { StatisticsTrendDto } from './StatisticsTrendDto';

@dto
export class StatisticsOverviewKPIsTotalTicketsSoldDto {
    get lifetime(): number {
        return this.#lifetime;
    }

    set lifetime(value: number) {
        this.#lifetime = value;
    }

    get trend(): StatisticsTrendDto<number> {
        return this.#trend;
    }

    set trend(value: StatisticsTrendDto<number>) {
        this.#trend = value;
    }

    #lifetime: number;
    #trend: StatisticsTrendDto<number>;

    constructor(lifetime: number, trend: StatisticsTrendDto<number>) {
        this.#lifetime = lifetime;
        this.#trend = trend;
    }
}
