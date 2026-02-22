import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { UserDto } from '../../dto';

@dto
export class MerchantUserDto {
    get isManager(): boolean {
        return this.#isManager;
    }

    set isManager(value: boolean) {
        this.#isManager = value;
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

    get user(): UserDto {
        return this.#user;
    }

    set user(value: UserDto) {
        this.#user = value;
    }

    #isManager: boolean;
    #createdOn: DateTime;
    #updatedOn: DateTime;
    #user: UserDto;

    constructor(isManager: boolean, createdOn: DateTime, updatedOn: DateTime, user: UserDto) {
        this.#isManager = isManager;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
        this.#user = user;
    }
}
