import { dto } from '@basmilius/http-client';
import { type CostDto } from '#data/dto';

@dto
export class StatisticsEventsOverviewDto {
    get totalEvents(): number {
        return this.#totalEvents;
    }

    set totalEvents(value: number) {
        this.#totalEvents = value;
    }

    get activeEvents(): number {
        return this.#activeEvents;
    }

    set activeEvents(value: number) {
        this.#activeEvents = value;
    }

    get averageRevenuePerEvent(): CostDto {
        return this.#averageRevenuePerEvent;
    }

    set averageRevenuePerEvent(value: CostDto) {
        this.#averageRevenuePerEvent = value;
    }

    get averageTicketsPerEvent(): number {
        return this.#averageTicketsPerEvent;
    }

    set averageTicketsPerEvent(value: number) {
        this.#averageTicketsPerEvent = value;
    }

    get averageSellThroughRate(): number {
        return this.#averageSellThroughRate;
    }

    set averageSellThroughRate(value: number) {
        this.#averageSellThroughRate = value;
    }

    #totalEvents: number;
    #activeEvents: number;
    #averageRevenuePerEvent: CostDto;
    #averageTicketsPerEvent: number;
    #averageSellThroughRate: number;

    constructor(totalEvents: number, activeEvents: number, averageRevenuePerEvent: CostDto, averageTicketsPerEvent: number, averageSellThroughRate: number) {
        this.#totalEvents = totalEvents;
        this.#activeEvents = activeEvents;
        this.#averageRevenuePerEvent = averageRevenuePerEvent;
        this.#averageTicketsPerEvent = averageTicketsPerEvent;
        this.#averageSellThroughRate = averageSellThroughRate;
    }
}
