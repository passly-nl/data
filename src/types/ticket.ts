export type ScanStatus =
    | 'checkin'
    | 'checkout'
    | 'expired'
    | 'pending'
    | 'upcoming';

export type TicketValidity =
    | 'valid'
    | 'invalid'
    | 'refunded'
    | 'swapped';
