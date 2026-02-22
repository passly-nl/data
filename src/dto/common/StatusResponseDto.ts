import { dto } from '@basmilius/http-client';

@dto
export class StatusResponseDto {
    get message(): string | null {
        return this.#message;
    }

    set message(value: string | null) {
        this.#message = value;
    }

    get status(): 'ok' | 'fail' {
        return this.#status;
    }

    set status(value: 'ok' | 'fail') {
        this.#status = value;
    }

    #message: string | null;
    #status: 'ok' | 'fail';

    constructor(message: string | null, status: 'ok' | 'fail') {
        this.#message = message;
        this.#status = status;
    }
}
