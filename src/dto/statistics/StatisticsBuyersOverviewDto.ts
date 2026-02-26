import { dto } from '@basmilius/http-client';
import type { CostDto, StatisticsTrendDto } from '#data/dto';

@dto
export class StatisticsBuyersOverviewDto {
    get buyers(): StatisticsTrendDto<number> {
        return this.#buyers;
    }

    set buyers(value: StatisticsTrendDto<number>) {
        this.#buyers = value;
    }

    get newBuyers(): StatisticsTrendDto<number> {
        return this.#newBuyers;
    }

    set newBuyers(value: StatisticsTrendDto<number>) {
        this.#newBuyers = value;
    }

    get retentionRate(): StatisticsTrendDto<number> {
        return this.#retentionRate;
    }

    set retentionRate(value: StatisticsTrendDto<number>) {
        this.#retentionRate = value;
    }

    get totalBuyers(): number {
        return this.#totalBuyers;
    }

    set totalBuyers(value: number) {
        this.#totalBuyers = value;
    }

    get lifetimeValuePerBuyer(): CostDto {
        return this.#lifetimeValuePerBuyer;
    }

    set lifetimeValuePerBuyer(value: CostDto) {
        this.#lifetimeValuePerBuyer = value;
    }

    get averageTicketsPerBuyer(): number {
        return this.#averageTicketsPerBuyer;
    }

    set averageTicketsPerBuyer(value: number) {
        this.#averageTicketsPerBuyer = value;
    }

    #buyers: StatisticsTrendDto<number>;
    #newBuyers: StatisticsTrendDto<number>;
    #retentionRate: StatisticsTrendDto<number>;
    #totalBuyers: number;
    #lifetimeValuePerBuyer: CostDto;
    #averageTicketsPerBuyer: number;

    constructor(buyers: StatisticsTrendDto<number>, newBuyers: StatisticsTrendDto<number>, retentionRate: StatisticsTrendDto<number>, totalBuyers: number, lifetimeValuePerBuyer: CostDto, averageTicketsPerBuyer: number) {
        this.#buyers = buyers;
        this.#newBuyers = newBuyers;
        this.#retentionRate = retentionRate;
        this.#totalBuyers = totalBuyers;
        this.#lifetimeValuePerBuyer = lifetimeValuePerBuyer;
        this.#averageTicketsPerBuyer = averageTicketsPerBuyer;
    }
}
