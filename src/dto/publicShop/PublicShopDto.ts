import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { PublicShopDesignDto, PublicShopElementDto, PublicShopEventDto, PublicShopMerchantDto } from '../../dto';
import type { ShopFieldRequirement } from '../../types';

@dto
export class PublicShopDto {
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

    get startsOn(): DateTime {
        return this.#startsOn;
    }

    set startsOn(value: DateTime) {
        this.#startsOn = value;
    }

    get endsOn(): DateTime {
        return this.#endsOn;
    }

    set endsOn(value: DateTime) {
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

    get design(): PublicShopDesignDto {
        return this.#design;
    }

    set design(value: PublicShopDesignDto) {
        this.#design = value;
    }

    get elements(): PublicShopElementDto[] | null {
        return this.#elements;
    }

    set elements(value: PublicShopElementDto[] | null) {
        this.#elements = value;
    }

    get event(): PublicShopEventDto {
        return this.#event;
    }

    set event(value: PublicShopEventDto) {
        this.#event = value;
    }

    get merchant(): PublicShopMerchantDto {
        return this.#merchant;
    }

    set merchant(value: PublicShopMerchantDto) {
        this.#merchant = value;
    }

    #id: string;
    #name: string;
    #startsOn: DateTime;
    #endsOn: DateTime;
    #fieldAddress: ShopFieldRequirement;
    #fieldBirthdate: ShopFieldRequirement;
    #fieldGender: ShopFieldRequirement;
    #fieldPhoneNumber: ShopFieldRequirement;
    #design: PublicShopDesignDto;
    #elements: PublicShopElementDto[] | null;
    #event: PublicShopEventDto;
    #merchant: PublicShopMerchantDto;

    constructor(id: string, name: string, startsOn: DateTime, endsOn: DateTime, fieldAddress: ShopFieldRequirement, fieldBirthdate: ShopFieldRequirement, fieldGender: ShopFieldRequirement, fieldPhoneNumber: ShopFieldRequirement, design: PublicShopDesignDto, elements: PublicShopElementDto[] | null, event: PublicShopEventDto, merchant: PublicShopMerchantDto) {
        this.#id = id;
        this.#name = name;
        this.#startsOn = startsOn;
        this.#endsOn = endsOn;
        this.#fieldAddress = fieldAddress;
        this.#fieldBirthdate = fieldBirthdate;
        this.#fieldGender = fieldGender;
        this.#fieldPhoneNumber = fieldPhoneNumber;
        this.#design = design;
        this.#elements = elements;
        this.#event = event;
        this.#merchant = merchant;
    }
}
