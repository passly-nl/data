import { dto } from '@basmilius/http-client';
import type { StatisticsOverviewEventPerformanceEventDto, StatisticsOverviewEventPerformanceSummaryDto } from '#data/dto';

@dto
export class StatisticsOverviewEventPerformanceDto {
    get events(): StatisticsOverviewEventPerformanceEventDto[] {
        return this.#events;
    }

    set events(value: StatisticsOverviewEventPerformanceEventDto[]) {
        this.#events = value;
    }

    get summary(): StatisticsOverviewEventPerformanceSummaryDto {
        return this.#summary;
    }

    set summary(value: StatisticsOverviewEventPerformanceSummaryDto) {
        this.#summary = value;
    }

    #events: StatisticsOverviewEventPerformanceEventDto[];
    #summary: StatisticsOverviewEventPerformanceSummaryDto;

    constructor(events: StatisticsOverviewEventPerformanceEventDto[], summary: StatisticsOverviewEventPerformanceSummaryDto) {
        this.#events = events;
        this.#summary = summary;
    }
}
