import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter } from '#data/adapter';
import { MerchantSubscriptionDto, SubscriptionPlanDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class SubscriptionAdapter {
    static parseMerchantSubscription(data: ForeignData): MerchantSubscriptionDto {
        return new MerchantSubscriptionDto(
            data.id,
            data.type,
            data.plan_key,
            PaymentAdapter.parseCost(data.price_monthly),
            DateTimeAdapter.parseDateTime(data.starts_on),
            optional(data.ends_on, DateTimeAdapter.parseDateTime),
            optional(data.cancelled_on, DateTimeAdapter.parseDateTime),
            data.note ?? null
        );
    }

    static parseSubscriptionPlan(data: ForeignData): SubscriptionPlanDto {
        return new SubscriptionPlanDto(
            data.key,
            data.type,
            data.label,
            data.features ?? [],
            data.token_limit ?? null,
            PaymentAdapter.parseCost(data.price_monthly),
            data.enabled !== false
        );
    }
}
