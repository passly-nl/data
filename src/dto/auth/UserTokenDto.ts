import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { UserDto } from '../../dto';
import type { BrowserType, OperatingSystemType, UserTokenType } from '../../types';

@dto
export class UserTokenDto {
    get token(): string {
        return this.#token;
    }

    set token(value: string) {
        this.#token = value;
    }

    get type(): UserTokenType {
        return this.#type;
    }

    set type(value: UserTokenType) {
        this.#type = value;
    }

    get browser(): BrowserType | null {
        return this.#browser;
    }

    set browser(value: BrowserType | null) {
        this.#browser = value;
    }

    get operatingSystem(): OperatingSystemType | null {
        return this.#operatingSystem;
    }

    set operatingSystem(value: OperatingSystemType | null) {
        this.#operatingSystem = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get expiresOn(): DateTime {
        return this.#expiresOn;
    }

    set expiresOn(value: DateTime) {
        this.#expiresOn = value;
    }

    get realtimeChannel(): string | null {
        return this.#realtimeChannel;
    }

    set realtimeChannel(value: string | null) {
        this.#realtimeChannel = value;
    }

    get user(): UserDto {
        return this.#user;
    }

    set user(value: UserDto) {
        this.#user = value;
    }

    #token: string;
    #type: UserTokenType;
    #browser: BrowserType | null;
    #operatingSystem: OperatingSystemType | null;
    #createdOn: DateTime;
    #expiresOn: DateTime;
    #realtimeChannel: string | null;
    #user: UserDto;

    constructor(token: string, type: UserTokenType, browser: BrowserType | null, operatingSystem: OperatingSystemType | null, createdOn: DateTime, expiresOn: DateTime, realtimeChannel: string | null, user: UserDto) {
        this.#token = token;
        this.#type = type;
        this.#browser = browser;
        this.#operatingSystem = operatingSystem;
        this.#createdOn = createdOn;
        this.#expiresOn = expiresOn;
        this.#realtimeChannel = realtimeChannel;
        this.#user = user;
    }
}
