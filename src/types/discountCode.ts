export type DiscountCodeType =
    | 'percentage'
    | 'fixed_amount';

export type DiscountCodeEvent = {
    readonly id: string;
    readonly name: string;
};
