import { dto } from '@basmilius/http-client';
import type { CostDto } from '#data/dto';

@dto
export class StatisticsMarketingShortlinkRoiDto {
    get identifier(): string {
        return this.#identifier;
    }

    set identifier(value: string) {
        this.#identifier = value;
    }

    get hits(): number {
        return this.#hits;
    }

    set hits(value: number) {
        this.#hits = value;
    }

    get orders(): number {
        return this.#orders;
    }

    set orders(value: number) {
        this.#orders = value;
    }

    get revenue(): CostDto {
        return this.#revenue;
    }

    set revenue(value: CostDto) {
        this.#revenue = value;
    }

    get conversionRate(): number {
        return this.#conversionRate;
    }

    set conversionRate(value: number) {
        this.#conversionRate = value;
    }

    get shopId(): string | null {
        return this.#shopId;
    }

    set shopId(value: string | null) {
        this.#shopId = value;
    }

    get shopName(): string | null {
        return this.#shopName;
    }

    set shopName(value: string | null) {
        this.#shopName = value;
    }

    get eventId(): string | null {
        return this.#eventId;
    }

    set eventId(value: string | null) {
        this.#eventId = value;
    }

    get eventName(): string | null {
        return this.#eventName;
    }

    set eventName(value: string | null) {
        this.#eventName = value;
    }

    get targetUrl(): string | null {
        return this.#targetUrl;
    }

    set targetUrl(value: string | null) {
        this.#targetUrl = value;
    }

    #identifier: string;
    #hits: number;
    #orders: number;
    #revenue: CostDto;
    #conversionRate: number;
    #shopId: string | null;
    #shopName: string | null;
    #eventId: string | null;
    #eventName: string | null;
    #targetUrl: string | null;

    constructor(identifier: string, hits: number, orders: number, revenue: CostDto, conversionRate: number, shopId: string | null, shopName: string | null, eventId: string | null, eventName: string | null, targetUrl: string | null) {
        this.#identifier = identifier;
        this.#hits = hits;
        this.#orders = orders;
        this.#revenue = revenue;
        this.#conversionRate = conversionRate;
        this.#shopId = shopId;
        this.#shopName = shopName;
        this.#eventId = eventId;
        this.#eventName = eventName;
        this.#targetUrl = targetUrl;
    }
}
