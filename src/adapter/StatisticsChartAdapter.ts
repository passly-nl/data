import { adapter, ForeignData } from '@basmilius/http-client';
import { StatisticsChartDto, StatisticsPieChartDto } from '#data/dto';
import type { StatisticsChartDataPoint, StatisticsChartSeries, StatisticsChartSeriesKind, StatisticsChartValueType, StatisticsPieSlice } from '#data/types';

@adapter
export class StatisticsChartAdapter {
    static parseChart(data: ForeignData): StatisticsChartDto {
        return new StatisticsChartDto(
            data.series.map(StatisticsChartAdapter.parseSeries),
            data.labels,
            data.granularity ?? null
        );
    }

    static parseSeries(data: ForeignData): StatisticsChartSeries {
        return {
            name: data.name ?? null,
            valueType: data.value_type as StatisticsChartValueType,
            data: data.data.map(StatisticsChartAdapter.parseDataPoint),
            type: (data.type ?? null) as StatisticsChartSeriesKind | null,
            axisIndex: data.axis_index ?? null,
            zIndex: data.z_index ?? null,
            currency: data.currency ?? null
        };
    }

    static parseDataPoint(data: number | null | ForeignData): number | null | StatisticsChartDataPoint {
        if (data === null) {
            return null;
        }

        if (typeof data === 'number') {
            return data;
        }

        return {
            value: data.value,
            formatted: data.formatted
        };
    }

    static parsePie(data: ForeignData): StatisticsPieChartDto {
        return new StatisticsPieChartDto(
            data.slices.map(StatisticsChartAdapter.parsePieSlice),
            data.value_type as StatisticsChartValueType
        );
    }

    static parsePieSlice(data: ForeignData): StatisticsPieSlice {
        return {
            label: data.label,
            value: data.value,
            formatted: data.formatted ?? null
        };
    }
}
