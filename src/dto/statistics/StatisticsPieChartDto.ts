import { dto } from '@basmilius/http-client';
import type { StatisticsChartValueType, StatisticsPieSlice } from '#data/types';

@dto
export class StatisticsPieChartDto {
    get slices(): readonly StatisticsPieSlice[] {
        return this.#slices;
    }

    set slices(value: readonly StatisticsPieSlice[]) {
        this.#slices = value;
    }

    get valueType(): StatisticsChartValueType {
        return this.#valueType;
    }

    set valueType(value: StatisticsChartValueType) {
        this.#valueType = value;
    }

    #slices: readonly StatisticsPieSlice[];
    #valueType: StatisticsChartValueType;

    constructor(slices: readonly StatisticsPieSlice[], valueType: StatisticsChartValueType) {
        this.#slices = slices;
        this.#valueType = valueType;
    }
}
