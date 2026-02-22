import { dto } from '@basmilius/http-client';
import type { PaymentMethodDto } from '../../dto';
import type { PaymentProviderType } from '../../types';

@dto
export class PaymentProviderDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get type(): PaymentProviderType {
        return this.#type;
    }

    set type(value: PaymentProviderType) {
        this.#type = value;
    }

    get methods(): PaymentMethodDto[] {
        return this.#methods;
    }

    set methods(value: PaymentMethodDto[]) {
        this.#methods = value;
    }

    #id: string;
    #type: PaymentProviderType;
    #methods: PaymentMethodDto[];

    constructor(id: string, type: PaymentProviderType, methods: PaymentMethodDto[]) {
        this.#id = id;
        this.#type = type;
        this.#methods = methods;
    }
}
