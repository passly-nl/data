import { dto } from '@basmilius/http-client';
import type { Granularity, StatisticsChartSeries } from '#data/types';

@dto
export class StatisticsChartDto {
    get series(): readonly StatisticsChartSeries[] {
        return this.#series;
    }

    set series(value: readonly StatisticsChartSeries[]) {
        this.#series = value;
    }

    get labels(): readonly string[] {
        return this.#labels;
    }

    set labels(value: readonly string[]) {
        this.#labels = value;
    }

    get granularity(): Granularity | null {
        return this.#granularity;
    }

    set granularity(value: Granularity | null) {
        this.#granularity = value;
    }

    #series: readonly StatisticsChartSeries[];
    #labels: readonly string[];
    #granularity: Granularity | null;

    constructor(
        series: readonly StatisticsChartSeries[],
        labels: readonly string[],
        granularity: Granularity | null
    ) {
        this.#series = series;
        this.#labels = labels;
        this.#granularity = granularity;
    }
}
