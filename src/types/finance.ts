export type DailyRevenueChart = {
    current: DailyRevenueChartEntry[];
    previous: DailyRevenueChartEntry[];
};

export type DailyRevenueChartEntry = {
    readonly date: string;
    readonly label: string;
    readonly value: number;
};

export type InvoiceLineType =
    | 'fee'
    | 'manual';
