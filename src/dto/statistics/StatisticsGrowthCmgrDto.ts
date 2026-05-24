import { dto } from '@basmilius/http-client';

@dto
export class StatisticsGrowthCmgrDto {
    get revenueCmgr(): number {
        return this.#revenueCmgr;
    }

    set revenueCmgr(value: number) {
        this.#revenueCmgr = value;
    }

    get ticketsCmgr(): number {
        return this.#ticketsCmgr;
    }

    set ticketsCmgr(value: number) {
        this.#ticketsCmgr = value;
    }

    get monthsObserved(): number {
        return this.#monthsObserved;
    }

    set monthsObserved(value: number) {
        this.#monthsObserved = value;
    }

    #revenueCmgr: number;
    #ticketsCmgr: number;
    #monthsObserved: number;

    constructor(revenueCmgr: number, ticketsCmgr: number, monthsObserved: number) {
        this.#revenueCmgr = revenueCmgr;
        this.#ticketsCmgr = ticketsCmgr;
        this.#monthsObserved = monthsObserved;
    }
}
