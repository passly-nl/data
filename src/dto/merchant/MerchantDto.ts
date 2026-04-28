import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { AddressDto, ContractDto, PictureDto } from '#data/dto';

@dto
export class MerchantDto {
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

    get email(): string {
        return this.#email;
    }

    set email(value: string) {
        this.#email = value;
    }

    get phoneNumber(): string {
        return this.#phoneNumber;
    }

    set phoneNumber(value: string) {
        this.#phoneNumber = value;
    }

    get url(): string {
        return this.#url;
    }

    set url(value: string) {
        this.#url = value;
    }

    get chamberOfCommerceNumber(): string | null {
        return this.#chamberOfCommerceNumber;
    }

    set chamberOfCommerceNumber(value: string | null) {
        this.#chamberOfCommerceNumber = value;
    }

    get vatNumber(): string | null {
        return this.#vatNumber;
    }

    set vatNumber(value: string | null) {
        this.#vatNumber = value;
    }

    get currency(): string {
        return this.#currency;
    }

    set currency(value: string) {
        this.#currency = value;
    }

    get address(): AddressDto {
        return this.#address;
    }

    set address(value: AddressDto) {
        this.#address = value;
    }

    get currentContract(): ContractDto | null {
        return this.#currentContract;
    }

    set currentContract(value: ContractDto | null) {
        this.#currentContract = value;
    }

    get logo(): PictureDto | null {
        return this.#logo;
    }

    set logo(value: PictureDto | null) {
        this.#logo = value;
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

    get aiBrandVoice(): string | null {
        return this.#aiBrandVoice;
    }

    set aiBrandVoice(value: string | null) {
        this.#aiBrandVoice = value;
    }

    #id: string;
    #name: string;
    #email: string;
    #phoneNumber: string;
    #url: string;
    #chamberOfCommerceNumber: string | null;
    #vatNumber: string | null;
    #currency: string;
    #address: AddressDto;
    #currentContract: ContractDto | null;
    #logo: PictureDto | null;
    #createdOn: DateTime;
    #updatedOn: DateTime;
    #aiBrandVoice: string | null;

    constructor(
        id: string,
        name: string,
        email: string,
        phoneNumber: string,
        url: string,
        chamberOfCommerceNumber: string | null,
        vatNumber: string | null,
        currency: string,
        address: AddressDto,
        currentContract: ContractDto | null,
        logo: PictureDto | null,
        createdOn: DateTime,
        updatedOn: DateTime,
        aiBrandVoice: string | null = null
    ) {
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#phoneNumber = phoneNumber;
        this.#url = url;
        this.#chamberOfCommerceNumber = chamberOfCommerceNumber;
        this.#vatNumber = vatNumber;
        this.#currency = currency;
        this.#address = address;
        this.#currentContract = currentContract;
        this.#logo = logo;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
        this.#aiBrandVoice = aiBrandVoice;
    }
}
