import { dto } from '@basmilius/http-client';
import type { AddressDto, PictureDto } from '../../dto';
import type { EventStatus } from '../../types';

@dto
export class PublicShopEventDto {
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

    #id: string;
    #name: string;
    #status: EventStatus;
    #address: AddressDto;
    #headerFile: PictureDto | null;

    constructor(id: string, name: string, status: EventStatus, address: AddressDto, headerFile: PictureDto | null) {
        this.#id = id;
        this.#name = name;
        this.#status = status;
        this.#address = address;
        this.#headerFile = headerFile;
    }
}
