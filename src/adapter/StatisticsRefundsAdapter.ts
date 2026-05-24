import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, PaymentAdapter, StatisticsAdapter } from '#data/adapter';
import { StatisticsRefundsAmountDistributionDto, StatisticsRefundsOverviewDto, StatisticsRefundsTopEventDto, StatisticsRefundsVelocityDto } from '#data/dto';

@adapter
export class StatisticsRefundsAdapter {
    static parseOverview(data: ForeignData): StatisticsRefundsOverviewDto {
        return new StatisticsRefundsOverviewDto(
            StatisticsAdapter.parseTrend(data.refund_rate, Number),
            StatisticsAdapter.parseTrend(data.refund_count, Number),
            StatisticsAdapter.parseTrend(data.refund_amount, PaymentAdapter.parseCost),
            PaymentAdapter.parseCost(data.average_refund_amount),
            data.average_completion_time_seconds
        );
    }

    static parseTopEvents(data: ForeignData): StatisticsRefundsTopEventDto {
        return new StatisticsRefundsTopEventDto(
            data.event_id,
            data.event_name,
            DateTimeAdapter.parseDateTime(data.event_starts_on),
            data.refund_count,
            PaymentAdapter.parseCost(data.refund_amount),
            data.refund_rate
        );
    }

    static parseVelocity(data: ForeignData): StatisticsRefundsVelocityDto {
        return new StatisticsRefundsVelocityDto(
            data.average_days_order_to_refund,
            data.average_seconds_request_to_completion,
            data.buckets
        );
    }

    static parseAmountDistribution(data: ForeignData): StatisticsRefundsAmountDistributionDto {
        return new StatisticsRefundsAmountDistributionDto(
            data.full,
            data.partial,
            data.average_partial_ratio
        );
    }
}
