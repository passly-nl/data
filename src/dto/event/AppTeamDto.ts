import { dto } from '@basmilius/http-client';
import { type EventDto, type MerchantDto, type UserDto } from '#data/dto';

@dto
export class AppTeamDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get secret(): string {
        return this.#secret;
    }

    set secret(value: string) {
        this.#secret = value;
    }

    get checkinCount(): number {
        return this.#checkinCount;
    }

    set checkinCount(value: number) {
        this.#checkinCount = value;
    }

    get checkoutCount(): number {
        return this.#checkoutCount;
    }

    set checkoutCount(value: number) {
        this.#checkoutCount = value;
    }

    get creator(): UserDto {
        return this.#creator;
    }

    set creator(value: UserDto) {
        this.#creator = value;
    }

    get event(): EventDto {
        return this.#event;
    }

    set event(value: EventDto) {
        this.#event = value;
    }

    get merchant(): MerchantDto {
        return this.#merchant;
    }

    set merchant(value: MerchantDto) {
        this.#merchant = value;
    }

    #id: string;
    #name: string;
    #secret: string;
    #checkinCount: number;
    #checkoutCount: number;
    #creator: UserDto;
    #event: EventDto;
    #merchant: MerchantDto;

    constructor(id: string, name: string, secret: string, checkinCount: number, checkoutCount: number, creator: UserDto, event: EventDto, merchant: MerchantDto) {
        this.#id = id;
        this.#name = name;
        this.#secret = secret;
        this.#checkinCount = checkinCount;
        this.#checkoutCount = checkoutCount;
        this.#creator = creator;
        this.#event = event;
        this.#merchant = merchant;
    }
}
