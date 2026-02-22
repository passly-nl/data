import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { MerchantDto, UserDto } from '../../dto';
import type { Claim } from '../../types';

@dto
export class InvitationDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get merchantId(): string {
        return this.#merchantId;
    }

    set merchantId(value: string) {
        this.#merchantId = value;
    }

    get userId(): string {
        return this.#userId;
    }

    set userId(value: string) {
        this.#userId = value;
    }

    get claims(): Claim[] {
        return this.#claims;
    }

    set claims(value: Claim[]) {
        this.#claims = value;
    }

    get isNewUser(): boolean {
        return this.#isNewUser;
    }

    set isNewUser(value: boolean) {
        this.#isNewUser = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get updatedOn(): DateTime {
        return this.#updatedOn;
    }

    set updatedOn(value: DateTime) {
        this.#updatedOn = value;
    }

    get merchant(): MerchantDto {
        return this.#merchant;
    }

    set merchant(value: MerchantDto) {
        this.#merchant = value;
    }

    get user(): UserDto {
        return this.#user;
    }

    set user(value: UserDto) {
        this.#user = value;
    }

    #id: string;
    #merchantId: string;
    #userId: string;
    #claims: Claim[];
    #isNewUser: boolean;
    #createdOn: DateTime;
    #updatedOn: DateTime;
    #merchant: MerchantDto;
    #user: UserDto;

    constructor(id: string, merchantId: string, userId: string, claims: Claim[], isNewUser: boolean, createdOn: DateTime, updatedOn: DateTime, merchant: MerchantDto, user: UserDto) {
        this.#id = id;
        this.#merchantId = merchantId;
        this.#userId = userId;
        this.#claims = claims;
        this.#isNewUser = isNewUser;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
        this.#merchant = merchant;
        this.#user = user;
    }
}
