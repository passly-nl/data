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
