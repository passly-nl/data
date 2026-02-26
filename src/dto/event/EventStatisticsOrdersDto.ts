import { dto } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import type { EventStatisticsOrderTotalsDto } from '#data/dto';

@dto
export class EventStatisticsOrdersDto {
    get chart(): ApexOptions {
        return this.#chart;
    }

    set chart(value: ApexOptions) {
        this.#chart = value;
    }

    get totals(): EventStatisticsOrderTotalsDto {
        return this.#totals;
    }

    set totals(value: EventStatisticsOrderTotalsDto) {
        this.#totals = value;
    }

    #chart: ApexOptions;
    #totals: EventStatisticsOrderTotalsDto;

    constructor(chart: ApexOptions, totals: EventStatisticsOrderTotalsDto) {
        this.#chart = chart;
        this.#totals = totals;
    }
}
