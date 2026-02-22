import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { EventDto, MerchantDto, ShopDesignDto } from '../../dto';
import type { ShopFieldRequirement, ShopStatus } from '../../types';

@dto
export class ShopDto {
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

    get isPublished(): boolean {
        return this.#isPublished;
    }

    set isPublished(value: boolean) {
        this.#isPublished = value;
    }

    get password(): string {
        return this.#password;
    }

    set password(value: string) {
        this.#password = value;
    }

    get startsOn(): DateTime | null {
        return this.#startsOn;
    }

    set startsOn(value: DateTime | null) {
        this.#startsOn = value;
    }

    get endsOn(): DateTime | null {
        return this.#endsOn;
    }

    set endsOn(value: DateTime | null) {
        this.#endsOn = value;
    }

    get fieldAddress(): ShopFieldRequirement {
        return this.#fieldAddress;
    }

    set fieldAddress(value: ShopFieldRequirement) {
        this.#fieldAddress = value;
    }

    get fieldBirthdate(): ShopFieldRequirement {
        return this.#fieldBirthdate;
    }

    set fieldBirthdate(value: ShopFieldRequirement) {
        this.#fieldBirthdate = value;
    }

    get fieldGender(): ShopFieldRequirement {
        return this.#fieldGender;
    }

    set fieldGender(value: ShopFieldRequirement) {
        this.#fieldGender = value;
    }

    get fieldPhoneNumber(): ShopFieldRequirement {
        return this.#fieldPhoneNumber;
    }

    set fieldPhoneNumber(value: ShopFieldRequirement) {
        this.#fieldPhoneNumber = value;
    }

    get status(): ShopStatus {
        return this.#status;
    }

    set status(value: ShopStatus) {
        this.#status = value;
    }

    get design(): ShopDesignDto {
        return this.#design;
    }

    set design(value: ShopDesignDto) {
        this.#design = value;
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
    #isPublished: boolean;
    #password: string;
    #startsOn: DateTime | null;
    #endsOn: DateTime | null;
    #fieldAddress: ShopFieldRequirement;
    #fieldBirthdate: ShopFieldRequirement;
    #fieldGender: ShopFieldRequirement;
    #fieldPhoneNumber: ShopFieldRequirement;
    #status: ShopStatus;
    #design: ShopDesignDto;
    #event: EventDto;
    #merchant: MerchantDto;

    constructor(id: string, name: string, isPublished: boolean, password: string, startsOn: DateTime | null, endsOn: DateTime | null, fieldAddress: ShopFieldRequirement, fieldBirthdate: ShopFieldRequirement, fieldGender: ShopFieldRequirement, fieldPhoneNumber: ShopFieldRequirement, status: ShopStatus, design: ShopDesignDto, event: EventDto, merchant: MerchantDto) {
        this.#id = id;
        this.#name = name;
        this.#isPublished = isPublished;
        this.#password = password;
        this.#startsOn = startsOn;
        this.#endsOn = endsOn;
        this.#fieldAddress = fieldAddress;
        this.#fieldBirthdate = fieldBirthdate;
        this.#fieldGender = fieldGender;
        this.#fieldPhoneNumber = fieldPhoneNumber;
        this.#status = status;
        this.#design = design;
        this.#event = event;
        this.#merchant = merchant;
    }
}
