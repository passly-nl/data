import { dto } from '@basmilius/http-client';

@dto
export class ServiceInfoDto {
    get connectingIp(): string {
        return this.#connectingIp;
    }

    set connectingIp(value: string) {
        this.#connectingIp = value;
    }

    get country(): string | null {
        return this.#country;
    }

    set country(value: string | null) {
        this.#country = value;
    }

    get ray(): string | null {
        return this.#ray;
    }

    set ray(value: string | null) {
        this.#ray = value;
    }

    #connectingIp: string;
    #country: string | null;
    #ray: string | null;

    constructor(connectingIp: string, country: string | null, ray: string | null) {
        this.#connectingIp = connectingIp;
        this.#country = country;
        this.#ray = ray;
    }
}
