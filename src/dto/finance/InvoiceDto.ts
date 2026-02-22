import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto, InvoiceLineDto } from '../../dto';
import type { TransactionStatus } from '../../types';

@dto
export class InvoiceDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get number(): string {
        return this.#number;
    }

    set number(value: string) {
        this.#number = value;
    }

    get sequence(): number {
        return this.#sequence;
    }

    set sequence(value: number) {
        this.#sequence = value;
    }

    get status(): TransactionStatus {
        return this.#status;
    }

    set status(value: TransactionStatus) {
        this.#status = value;
    }

    get year(): number {
        return this.#year;
    }

    set year(value: number) {
        this.#year = value;
    }

    get total(): CostDto {
        return this.#total;
    }

    set total(value: CostDto) {
        this.#total = value;
    }

    get lines(): InvoiceLineDto[] {
        return this.#lines;
    }

    set lines(value: InvoiceLineDto[]) {
        this.#lines = value;
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
    #number: string;
    #sequence: number;
    #status: TransactionStatus;
    #year: number;
    #total: CostDto;
    #lines: InvoiceLineDto[];
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, number: string, sequence: number, status: TransactionStatus, year: number, total: CostDto, lines: InvoiceLineDto[], createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#number = number;
        this.#sequence = sequence;
        this.#status = status;
        this.#year = year;
        this.#total = total;
        this.#lines = lines;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
