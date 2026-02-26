import { adapter, ForeignData } from '@basmilius/http-client';
import { StatisticsTrendDto } from '../dto';

@adapter
export class StatisticsAdapter {
    static parseTrend<TValue>(data: ForeignData, adapter: (value: ForeignData) => TValue): StatisticsTrendDto<TValue> {
        return new StatisticsTrendDto(
            adapter(data.current),
            adapter(data.previous),
            data.growth_rate
        );
    }
}
