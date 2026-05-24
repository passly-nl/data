export type RefundReason =
    | 'fraud'
    | 'duplicate'
    | 'customer_request'
    | 'event_canceled'
    | 'other';

export type RefundStatus =
    | 'pending'
    | 'processing'
    | 'completed'
    | 'failed';

export type RefundabilityReason =
    | 'no_provider'
    | 'order_not_refundable'
    | 'provider_not_capable'
    | 'transaction_not_paid';
