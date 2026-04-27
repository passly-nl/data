import { dto } from '@basmilius/http-client';
import type { CostDto, StatisticsTrendDto } from '#data/dto';

@dto
export class StatisticsGrowthOverviewDto {
    get revenue(): StatisticsTrendDto<CostDto> {
        return this.#revenue;
    }

    set revenue(value: StatisticsTrendDto<CostDto>) {
        this.#revenue = value;
    }

    get tickets(): StatisticsTrendDto<number> {
        return this.#tickets;
    }

    set tickets(value: StatisticsTrendDto<number>) {
        this.#tickets = value;
    }

    get buyers(): StatisticsTrendDto<number> {
        return this.#buyers;
    }

    set buyers(value: StatisticsTrendDto<number>) {
        this.#buyers = value;
    }

    get events(): StatisticsTrendDto<number> {
        return this.#events;
    }

    set events(value: StatisticsTrendDto<number>) {
        this.#events = value;
    }

    get averageEventSize(): StatisticsTrendDto<number> {
        return this.#averageEventSize;
    }

    set averageEventSize(value: StatisticsTrendDto<number>) {
        this.#averageEventSize = value;
    }

    #revenue: StatisticsTrendDto<CostDto>;
    #tickets: StatisticsTrendDto<number>;
    #buyers: StatisticsTrendDto<number>;
    #events: StatisticsTrendDto<number>;
    #averageEventSize: StatisticsTrendDto<number>;

    constructor(revenue: StatisticsTrendDto<CostDto>, tickets: StatisticsTrendDto<number>, buyers: StatisticsTrendDto<number>, events: StatisticsTrendDto<number>, averageEventSize: StatisticsTrendDto<number>) {
        this.#revenue = revenue;
        this.#tickets = tickets;
        this.#buyers = buyers;
        this.#events = events;
        this.#averageEventSize = averageEventSize;
    }
}
