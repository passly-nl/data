import { adapter, ForeignData } from '@basmilius/http-client';
import { MarketingAttributionDto } from '#data/dto';

@adapter
export class MarketingAttributionAdapter {
    static parseMarketingAttribution(data: ForeignData): MarketingAttributionDto {
        return new MarketingAttributionDto(
            data.utm_source ?? null,
            data.utm_medium ?? null,
            data.utm_campaign ?? null,
            data.utm_term ?? null,
            data.utm_content ?? null,
            data.gclid ?? null,
            data.fbclid ?? null,
            data.referrer ?? null
        );
    }
}
