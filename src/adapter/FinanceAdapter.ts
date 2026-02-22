import { adapter } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter } from '#data/adapter';
import { FinanceOverviewDto, InvoiceDto, InvoiceLineDto } from '#data/dto';
import { optionalArray } from '#data/util';

@adapter
export class FinanceAdapter {
    static parseFinanceOverviewFromObject(overview: Record<string, any>): FinanceOverviewDto {
        return new FinanceOverviewDto(
            PaymentAdapter.parseCostFromObject(overview.estimated_payment_cost),
            overview.orders,
            PaymentAdapter.parseCostFromObject(overview.platform_cost),
            PaymentAdapter.parseCostFromObject(overview.revenue)
        );
    }

    static parseInvoiceFromObject(invoice: Record<string, any>): InvoiceDto {
        return new InvoiceDto(
            invoice.id,
            invoice.number,
            invoice.sequence,
            invoice.status,
            invoice.year,
            PaymentAdapter.parseCostFromObject(invoice.total),
            optionalArray(invoice.lines, FinanceAdapter.parseInvoiceLineFromObject)!,
            DateTimeAdapter.parseDateTimeFromString(invoice.created_on),
            DateTimeAdapter.parseDateTimeFromString(invoice.updated_on)
        );
    }

    static parseInvoiceLineFromObject(line: Record<string, any>): InvoiceLineDto {
        return new InvoiceLineDto(
            line.id,
            line.type,
            PaymentAdapter.parseCostFromObject(line.cost),
            DateTimeAdapter.parseDateTimeFromString(line.created_on),
            DateTimeAdapter.parseDateTimeFromString(line.updated_on)
        );
    }
}
