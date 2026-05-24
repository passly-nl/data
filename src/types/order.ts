export type OrderOrigin =
    | 'local'
    | 'ticketswap';

export type OrderRefundStatus =
    | 'not_refunded'
    | 'partially_refunded'
    | 'fully_refunded';

export type OrderType =
    | 'default'
    | 'guest';
