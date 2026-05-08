import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class EventStatisticsSalesFlowChartSeriesDto {
    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get data(): number[] {
        return this.#data;
    }

    set data(value: number[]) {
        this.#data = value;
    }

    get zIndex(): number {
        return this.#zIndex;
    }

    set zIndex(value: number) {
        this.#zIndex = value;
    }

    #name: string;
    #data: number[];
    #zIndex: number;

    constructor(name: string, data: number[], zIndex: number) {
        this.#name = name;
        this.#data = data;
        this.#zIndex = zIndex;
    }
}

@dto
export class EventStatisticsSalesFlowChartDto {
    get series(): EventStatisticsSalesFlowChartSeriesDto[] {
        return this.#series;
    }

    set series(value: EventStatisticsSalesFlowChartSeriesDto[]) {
        this.#series = value;
    }

    get categories(): DateTime[] {
        return this.#categories;
    }

    set categories(value: DateTime[]) {
        this.#categories = value;
    }

    #series: EventStatisticsSalesFlowChartSeriesDto[];
    #categories: DateTime[];

    constructor(series: EventStatisticsSalesFlowChartSeriesDto[], categories: DateTime[]) {
        this.#series = series;
        this.#categories = categories;
    }
}
