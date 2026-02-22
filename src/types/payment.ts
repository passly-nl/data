export type PaymentProviderType =
    | 'mollie'
    | 'manual';

export type TransactionStatus =
    | 'canceled'
    | 'expired'
    | 'failed'
    | 'paid'
    | 'pending'
    | 'setup'
