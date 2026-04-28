import { dto } from '@basmilius/http-client';

@dto
export class AiChatToolCallDto {
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

    get input(): Record<string, unknown> {
        return this.#input;
    }

    set input(value: Record<string, unknown>) {
        this.#input = value;
    }

    get output(): unknown {
        return this.#output;
    }

    set output(value: unknown) {
        this.#output = value;
    }

    get isError(): boolean {
        return this.#isError;
    }

    set isError(value: boolean) {
        this.#isError = value;
    }

    #id: string;
    #name: string;
    #input: Record<string, unknown>;
    #output: unknown;
    #isError: boolean;

    constructor(id: string, name: string, input: Record<string, unknown>, output: unknown, isError: boolean) {
        this.#id = id;
        this.#name = name;
        this.#input = input;
        this.#output = output;
        this.#isError = isError;
    }
}
