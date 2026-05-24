export type StatisticsChartValueType =
    | 'count'
    | 'integer'
    | 'currency'
    | 'percentage'
    | 'duration';

export type StatisticsChartSeriesKind =
    | 'line'
    | 'area'
    | 'bar';

export type StatisticsChartDataPoint = {
    readonly value: number;
    readonly formatted?: string;
};

export interface StatisticsChartSeries {
    readonly name: string | null;
    readonly valueType: StatisticsChartValueType;
    readonly data: readonly (number | null | StatisticsChartDataPoint)[];
    readonly type: StatisticsChartSeriesKind | null;
    readonly axisIndex: number | null;
    readonly zIndex: number | null;
    readonly currency: string | null;
}

export interface StatisticsPieSlice {
    readonly label: string;
    readonly value: number;
    readonly formatted: string | null;
}
