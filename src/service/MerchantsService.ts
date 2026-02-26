import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { MerchantAdapter } from '../adapter';
import type { MerchantDto } from '../dto';

export class MerchantsService extends BaseService {
    async get(): Promise<BaseResponse<MerchantDto[]>> {
        return await this
            .request('/merchants')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runArrayAdapter(MerchantAdapter.parseMerchant);
    }
}
