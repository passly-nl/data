import { BaseResponse, BaseService, Paginated } from '@basmilius/http-client';
import { EmailTemplateAdapter } from '#data/adapter';
import type { EmailTemplateDto } from '#data/dto';
import type { EmailTemplateLanguage, EmailTemplateType, ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantEventEmailTemplatesService extends BaseService {
    async get(merchantId: string, eventId: string, params: ListParams): Promise<BaseResponse<Paginated<EmailTemplateDto>>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/email-templates`)
            .method('get')
            .bearerToken()
            .queryString(buildListQuery(params))
            .runPaginatedAdapter(EmailTemplateAdapter.parseEmailTemplate);
    }

    async post(merchantId: string, eventId: string, type: EmailTemplateType, subject: string, content: string, language: EmailTemplateLanguage | null = null): Promise<BaseResponse<EmailTemplateDto>> {
        return await this
            .request(`/merchants/${merchantId}/events/${eventId}/email-templates`)
            .method('post')
            .bearerToken()
            .body({
                type,
                subject,
                content,
                language
            })
            .runAdapter(EmailTemplateAdapter.parseEmailTemplate);
    }
}
