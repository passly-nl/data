import { dto } from '@basmilius/http-client';

@dto
export class StatisticsBuyersAcquisitionSourceDto {
    get source(): string {
        return this.#source;
    }

    set source(value: string) {
        this.#source = value;
    }

    get buyers(): number {
        return this.#buyers;
    }

    set buyers(value: number) {
        this.#buyers = value;
    }

    #source: string;
    #buyers: number;

    constructor(source: string, buyers: number) {
        this.#source = source;
        this.#buyers = buyers;
    }
}
