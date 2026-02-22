import { dto } from '@basmilius/http-client';

@dto
export class TotpStateDto {
    get enabled(): boolean {
        return this.#enabled;
    }

    set enabled(value: boolean) {
        this.#enabled = value;
    }

    get secret(): string | null {
        return this.#secret;
    }

    set secret(value: string | null) {
        this.#secret = value;
    }

    get qr(): string | null {
        return this.#qr;
    }

    set qr(value: string | null) {
        this.#qr = value;
    }

    #enabled: boolean;
    #secret: string | null;
    #qr: string | null;

    constructor(enabled: boolean, secret: string | null, qr: string | null) {
        this.#enabled = enabled;
        this.#secret = secret;
        this.#qr = qr;
    }
}
