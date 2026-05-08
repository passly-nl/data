import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { CostDto, RefundInitiatorDto, RefundTicketRefDto } from '#data/dto';
import type { RefundReason, RefundStatus } from '#data/types';

@dto
export class CashFlowRefundDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get amount(): CostDto {
        return this.#amount;
    }

    set amount(value: CostDto) {
        this.#amount = value;
    }

    get status(): RefundStatus {
        return this.#status;
    }

    set status(value: RefundStatus) {
        this.#status = value;
    }

    get reason(): RefundReason {
        return this.#reason;
    }

    set reason(value: RefundReason) {
        this.#reason = value;
    }

    get reasonLabel(): string {
        return this.#reasonLabel;
    }

    set reasonLabel(value: string) {
        this.#reasonLabel = value;
    }

    get note(): string | null {
        return this.#note;
    }

    set note(value: string | null) {
        this.#note = value;
    }

    get initiator(): RefundInitiatorDto | null {
        return this.#initiator;
    }

    set initiator(value: RefundInitiatorDto | null) {
        this.#initiator = value;
    }

    get tickets(): RefundTicketRefDto[] {
        return this.#tickets;
    }

    set tickets(value: RefundTicketRefDto[]) {
        this.#tickets = value;
    }

    get completedOn(): DateTime | null {
        return this.#completedOn;
    }

    set completedOn(value: DateTime | null) {
        this.#completedOn = value;
    }

    #id: string;
    #amount: CostDto;
    #status: RefundStatus;
    #reason: RefundReason;
    #reasonLabel: string;
    #note: string | null;
    #initiator: RefundInitiatorDto | null;
    #tickets: RefundTicketRefDto[];
    #completedOn: DateTime | null;

    constructor(id: string, amount: CostDto, status: RefundStatus, reason: RefundReason, reasonLabel: string, note: string | null, initiator: RefundInitiatorDto | null, tickets: RefundTicketRefDto[], completedOn: DateTime | null) {
        this.#id = id;
        this.#amount = amount;
        this.#status = status;
        this.#reason = reason;
        this.#reasonLabel = reasonLabel;
        this.#note = note;
        this.#initiator = initiator;
        this.#tickets = tickets;
        this.#completedOn = completedOn;
    }
}
