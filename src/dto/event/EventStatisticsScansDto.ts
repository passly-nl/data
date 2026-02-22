import { dto } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';
import type { EventStatisticsScansPerAppTeamDto, EventStatisticsScanTotalsDto } from '#data/dto';

@dto
export class EventStatisticsScansDto {
    get appTeams(): EventStatisticsScansPerAppTeamDto[] {
        return this.#appTeams;
    }

    set appTeams(value: EventStatisticsScansPerAppTeamDto[]) {
        this.#appTeams = value;
    }

    get chart(): ApexOptions {
        return this.#chart;
    }

    set chart(value: ApexOptions) {
        this.#chart = value;
    }

    get totals(): EventStatisticsScanTotalsDto {
        return this.#totals;
    }

    set totals(value: EventStatisticsScanTotalsDto) {
        this.#totals = value;
    }

    #appTeams: EventStatisticsScansPerAppTeamDto[];
    #chart: ApexOptions;
    #totals: EventStatisticsScanTotalsDto;

    constructor(appTeams: EventStatisticsScansPerAppTeamDto[], chart: ApexOptions, totals: EventStatisticsScanTotalsDto) {
        this.#appTeams = appTeams;
        this.#chart = chart;
        this.#totals = totals;
    }
}
