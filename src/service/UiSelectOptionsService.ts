import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { FluxFormSelectEntry, FluxFormSelectOption } from '@flux-ui/types';

export class UiSelectOptionsService extends BaseService {
    async getClaims(): Promise<BaseResponse<FluxFormSelectEntry[]>> {
        return await this
            .request('/ui/select-options/claims')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter((grouped: any) => {
                const result: FluxFormSelectEntry[] = [];

                grouped.forEach((group: any) => {
                    result.push({icon: group.icon, label: group.label});
                    group.claims.forEach((claim: any) => result.push({label: claim.label, value: claim.value}));
                });

                return result;
            });
    }

    async getCountries(): Promise<BaseResponse<FluxFormSelectOption[]>> {
        return await this
            .request('/ui/select-options/countries')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runArrayAdapter(e => e as FluxFormSelectOption);
    }

    async getLanguages(): Promise<BaseResponse<FluxFormSelectOption[]>> {
        return await this
            .request('/ui/select-options/languages')
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runArrayAdapter(e => e as FluxFormSelectOption);
    }
}
