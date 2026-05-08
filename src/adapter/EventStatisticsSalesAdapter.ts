import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter } from '#data/adapter';
import { EventStatisticsSalesFlowChartDto, EventStatisticsSalesFlowChartSeriesDto } from '#data/dto';

@adapter
export class EventStatisticsSalesAdapter {
    static parseSalesFlowChart(data: ForeignData): EventStatisticsSalesFlowChartDto {
        return new EventStatisticsSalesFlowChartDto(
            data.series.map(EventStatisticsSalesAdapter.parseSalesFlowChartSeries),
            data.xaxis.categories.map(DateTimeAdapter.parseDateTime)
        );
    }

    static parseSalesFlowChartSeries(data: ForeignData): EventStatisticsSalesFlowChartSeriesDto {
        return new EventStatisticsSalesFlowChartSeriesDto(
            data.name,
            data.data,
            data.zIndex
        );
    }
}
