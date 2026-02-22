import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { AddressDto, PictureDto } from '../../dto';
import type { EventStatus } from '../../types';

@dto
export class EventDto {
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

    get description(): string {
        return this.#description;
    }

    set description(value: string) {
        this.#description = value;
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

    get minimumAge(): number {
        return this.#minimumAge;
    }

    set minimumAge(value: number) {
        this.#minimumAge = value;
    }

    get status(): EventStatus {
        return this.#status;
    }

    set status(value: EventStatus) {
        this.#status = value;
    }

    get address(): AddressDto {
        return this.#address;
    }

    set address(value: AddressDto) {
        this.#address = value;
    }

    get headerFile(): PictureDto | null {
        return this.#headerFile;
    }

    set headerFile(value: PictureDto | null) {
        this.#headerFile = value;
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

    #id: string;
    #name: string;
    #description: string;
    #startsOn: DateTime;
    #endsOn: DateTime;
    #minimumAge: number;
    #status: EventStatus;
    #address: AddressDto;
    #headerFile: PictureDto | null;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, name: string, description: string, startsOn: DateTime, endsOn: DateTime, minimumAge: number, status: EventStatus, address: AddressDto, headerFile: PictureDto | null, createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#startsOn = startsOn;
        this.#endsOn = endsOn;
        this.#minimumAge = minimumAge;
        this.#status = status;
        this.#address = address;
        this.#headerFile = headerFile;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
