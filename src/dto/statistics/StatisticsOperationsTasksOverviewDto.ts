import { dto } from '@basmilius/http-client';
import type { StatisticsOperationsTaskAssigneeDto } from '#data/dto';

@dto
export class StatisticsOperationsTasksOverviewDto {
    get open(): number {
        return this.#open;
    }

    set open(value: number) {
        this.#open = value;
    }

    get inProgress(): number {
        return this.#inProgress;
    }

    set inProgress(value: number) {
        this.#inProgress = value;
    }

    get resolved(): number {
        return this.#resolved;
    }

    set resolved(value: number) {
        this.#resolved = value;
    }

    get canceled(): number {
        return this.#canceled;
    }

    set canceled(value: number) {
        this.#canceled = value;
    }

    get averageResolveTimeSeconds(): number {
        return this.#averageResolveTimeSeconds;
    }

    set averageResolveTimeSeconds(value: number) {
        this.#averageResolveTimeSeconds = value;
    }

    get topAssignees(): StatisticsOperationsTaskAssigneeDto[] {
        return this.#topAssignees;
    }

    set topAssignees(value: StatisticsOperationsTaskAssigneeDto[]) {
        this.#topAssignees = value;
    }

    #open: number;
    #inProgress: number;
    #resolved: number;
    #canceled: number;
    #averageResolveTimeSeconds: number;
    #topAssignees: StatisticsOperationsTaskAssigneeDto[];

    constructor(open: number, inProgress: number, resolved: number, canceled: number, averageResolveTimeSeconds: number, topAssignees: StatisticsOperationsTaskAssigneeDto[]) {
        this.#open = open;
        this.#inProgress = inProgress;
        this.#resolved = resolved;
        this.#canceled = canceled;
        this.#averageResolveTimeSeconds = averageResolveTimeSeconds;
        this.#topAssignees = topAssignees;
    }
}
