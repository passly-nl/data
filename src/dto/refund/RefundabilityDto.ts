import { dto } from '@basmilius/http-client';
import type { RefundabilityReason } from '#data/types';

@dto
export class RefundabilityDto {
    get supported(): boolean {
        return this.#supported;
    }

    set supported(value: boolean) {
        this.#supported = value;
    }

    get reason(): RefundabilityReason | null {
        return this.#reason;
    }

    set reason(value: RefundabilityReason | null) {
        this.#reason = value;
    }

    #supported: boolean;
    #reason: RefundabilityReason | null;

    constructor(supported: boolean, reason: RefundabilityReason | null) {
        this.#supported = supported;
        this.#reason = reason;
    }
}
