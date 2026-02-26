import { dto } from '@basmilius/http-client';
import { type BuyerDto, type CostDto } from '#data/dto';

@dto
export class StatisticsBuyersRankedDto {
    get ranking(): number {
        return this.#ranking;
    }

    set ranking(value: number) {
        this.#ranking = value;
    }

    get buyer(): BuyerDto {
        return this.#buyer;
    }

    set buyer(value: BuyerDto) {
        this.#buyer = value;
    }

    get orderCount(): number {
        return this.#orderCount;
    }

    set orderCount(value: number) {
        this.#orderCount = value;
    }

    get totalSpend(): CostDto {
        return this.#totalSpend;
    }

    set totalSpend(value: CostDto) {
        this.#totalSpend = value;
    }

    get eventsAttended(): number {
        return this.#eventsAttended;
    }

    set eventsAttended(value: number) {
        this.#eventsAttended = value;
    }

    get averageOrderValue(): CostDto {
        return this.#averageOrderValue;
    }

    set averageOrderValue(value: CostDto) {
        this.#averageOrderValue = value;
    }

    #ranking: number;
    #buyer: BuyerDto;
    #orderCount: number;
    #totalSpend: CostDto;
    #eventsAttended: number;
    #averageOrderValue: CostDto;

    constructor(ranking: number, buyer: BuyerDto, orderCount: number, totalSpend: CostDto, eventsAttended: number, averageOrderValue: CostDto) {
        this.#ranking = ranking;
        this.#buyer = buyer;
        this.#orderCount = orderCount;
        this.#totalSpend = totalSpend;
        this.#eventsAttended = eventsAttended;
        this.#averageOrderValue = averageOrderValue;
    }
}
