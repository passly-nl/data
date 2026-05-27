import { BaseResponse, BaseService, Paginated } from '@basmilius/http-client';
import { EmailTemplateAdapter } from '#data/adapter';
import type { EmailTemplateDto } from '#data/dto';
import type { EmailTemplateLanguage, EmailTemplateType, ListParams } from '#data/types';
import { buildListQuery } from '#data/util';

export class MerchantEmailTemplatesService extends BaseService {
    async get(merchantId: string, params: ListParams): Promise<BaseResponse<Paginated<EmailTemplateDto>>> {
        return await this
            .request(`/merchants/${merchantId}/email-templates`)
            .method('get')
            .bearerToken()
            .queryString(buildListQuery(params))
            .runPaginatedAdapter(EmailTemplateAdapter.parseEmailTemplate);
    }

    async post(merchantId: string, type: EmailTemplateType, subject: string, content: string, language: EmailTemplateLanguage | null = null): Promise<BaseResponse<EmailTemplateDto>> {
        return await this
            .request(`/merchants/${merchantId}/email-templates`)
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
