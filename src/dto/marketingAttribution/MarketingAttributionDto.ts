import { dto } from '@basmilius/http-client';

@dto
export class MarketingAttributionDto {
    get utmSource(): string | null {
        return this.#utmSource;
    }

    set utmSource(value: string | null) {
        this.#utmSource = value;
    }

    get utmMedium(): string | null {
        return this.#utmMedium;
    }

    set utmMedium(value: string | null) {
        this.#utmMedium = value;
    }

    get utmCampaign(): string | null {
        return this.#utmCampaign;
    }

    set utmCampaign(value: string | null) {
        this.#utmCampaign = value;
    }

    get utmTerm(): string | null {
        return this.#utmTerm;
    }

    set utmTerm(value: string | null) {
        this.#utmTerm = value;
    }

    get utmContent(): string | null {
        return this.#utmContent;
    }

    set utmContent(value: string | null) {
        this.#utmContent = value;
    }

    get gclid(): string | null {
        return this.#gclid;
    }

    set gclid(value: string | null) {
        this.#gclid = value;
    }

    get fbclid(): string | null {
        return this.#fbclid;
    }

    set fbclid(value: string | null) {
        this.#fbclid = value;
    }

    get referrer(): string | null {
        return this.#referrer;
    }

    set referrer(value: string | null) {
        this.#referrer = value;
    }

    #utmSource: string | null;
    #utmMedium: string | null;
    #utmCampaign: string | null;
    #utmTerm: string | null;
    #utmContent: string | null;
    #gclid: string | null;
    #fbclid: string | null;
    #referrer: string | null;

    constructor(utmSource: string | null, utmMedium: string | null, utmCampaign: string | null, utmTerm: string | null, utmContent: string | null, gclid: string | null, fbclid: string | null, referrer: string | null) {
        this.#utmSource = utmSource;
        this.#utmMedium = utmMedium;
        this.#utmCampaign = utmCampaign;
        this.#utmTerm = utmTerm;
        this.#utmContent = utmContent;
        this.#gclid = gclid;
        this.#fbclid = fbclid;
        this.#referrer = referrer;
    }
}
