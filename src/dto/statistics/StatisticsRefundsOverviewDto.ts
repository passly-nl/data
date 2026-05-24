import { dto } from '@basmilius/http-client';
import type { CostDto, StatisticsTrendDto } from '#data/dto';

@dto
export class StatisticsRefundsOverviewDto {
    get refundRate(): StatisticsTrendDto<number> {
        return this.#refundRate;
    }

    set refundRate(value: StatisticsTrendDto<number>) {
        this.#refundRate = value;
    }

    get refundCount(): StatisticsTrendDto<number> {
        return this.#refundCount;
    }

    set refundCount(value: StatisticsTrendDto<number>) {
        this.#refundCount = value;
    }

    get refundAmount(): StatisticsTrendDto<CostDto> {
        return this.#refundAmount;
    }

    set refundAmount(value: StatisticsTrendDto<CostDto>) {
        this.#refundAmount = value;
    }

    get averageRefundAmount(): CostDto {
        return this.#averageRefundAmount;
    }

    set averageRefundAmount(value: CostDto) {
        this.#averageRefundAmount = value;
    }

    get averageCompletionTimeSeconds(): number {
        return this.#averageCompletionTimeSeconds;
    }

    set averageCompletionTimeSeconds(value: number) {
        this.#averageCompletionTimeSeconds = value;
    }

    #refundRate: StatisticsTrendDto<number>;
    #refundCount: StatisticsTrendDto<number>;
    #refundAmount: StatisticsTrendDto<CostDto>;
    #averageRefundAmount: CostDto;
    #averageCompletionTimeSeconds: number;

    constructor(refundRate: StatisticsTrendDto<number>, refundCount: StatisticsTrendDto<number>, refundAmount: StatisticsTrendDto<CostDto>, averageRefundAmount: CostDto, averageCompletionTimeSeconds: number) {
        this.#refundRate = refundRate;
        this.#refundCount = refundCount;
        this.#refundAmount = refundAmount;
        this.#averageRefundAmount = averageRefundAmount;
        this.#averageCompletionTimeSeconds = averageCompletionTimeSeconds;
    }
}
