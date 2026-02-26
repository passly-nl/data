import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter } from '#data/adapter';
import { FinanceOverviewDto, InvoiceDto, InvoiceLineDto } from '#data/dto';
import { optionalArray } from '#data/util';

@adapter
export class FinanceAdapter {
    static parseFinanceOverview(data: ForeignData): FinanceOverviewDto {
        return new FinanceOverviewDto(
            PaymentAdapter.parseCost(data.estimated_payment_cost),
            data.orders,
            PaymentAdapter.parseCost(data.platform_cost),
            PaymentAdapter.parseCost(data.revenue)
        );
    }

    static parseInvoice(data: ForeignData): InvoiceDto {
        return new InvoiceDto(
            data.id,
            data.number,
            data.sequence,
            data.status,
            data.year,
            PaymentAdapter.parseCost(data.total),
            optionalArray(data.lines, FinanceAdapter.parseInvoiceLine)!,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }

    static parseInvoiceLine(data: ForeignData): InvoiceLineDto {
        return new InvoiceLineDto(
            data.id,
            data.type,
            PaymentAdapter.parseCost(data.cost),
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }
}
