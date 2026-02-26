import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';
import type { StatisticsTrendDto } from './StatisticsTrendDto';

@dto
export class StatisticsOverviewKPIsTotalRevenueDto {
    get lifetime(): CostDto {
        return this.#lifetime;
    }

    set lifetime(value: CostDto) {
        this.#lifetime = value;
    }

    get trend(): StatisticsTrendDto<CostDto> {
        return this.#trend;
    }

    set trend(value: StatisticsTrendDto<CostDto>) {
        this.#trend = value;
    }

    #lifetime: CostDto;
    #trend: StatisticsTrendDto<CostDto>;

    constructor(lifetime: CostDto, trend: StatisticsTrendDto<CostDto>) {
        this.#lifetime = lifetime;
        this.#trend = trend;
    }
}
