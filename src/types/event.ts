export type EventStatus =
    | 'active'
    | 'concluded'
    | 'happening'
    | 'in_sale'
    | 'pending';

export type EventStatisticsStatus =
    | 'active'
    | 'concluded'
    | 'upcoming';

export type ShopElementType =
    | 'button'
    | 'divider'
    | 'heading'
    | 'notice'
    | 'product'
    | 'text';

export type ShopAddressMode =
    | 'full'
    | 'city'
    | 'postal_code_number';

export type ShopFieldRequirement =
    | 'disabled'
    | 'enabled'
    | 'required';

export type ShopStatus =
    | 'closed'
    | 'concluded'
    | 'in_sale'
    | 'pending';

export type TicketTemplateType =
    | 'default';
