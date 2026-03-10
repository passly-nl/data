import { BaseResponse, BaseService, Paginated, QueryString } from '@basmilius/http-client';
import { MerchantAdapter } from '#data/adapter';
import type { ContractDto } from '#data/dto';
import type { DateTime } from 'luxon';

export class MerchantContractService extends BaseService {
    async get(merchantId: string, offset: number, limit: number): Promise<BaseResponse<Paginated<ContractDto>>> {
        return await this
            .request(`/merchants/${merchantId}/contracts`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .runPaginatedAdapter(MerchantAdapter.parseContract);
    }

    async getSingle(merchantId: string, contractId: string): Promise<BaseResponse<ContractDto>> {
        return await this
            .request(`/merchants/${merchantId}/contracts/${contractId}`)
            .method('get')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(MerchantAdapter.parseContract);
    }

    async post(merchantId: string, startsOn: DateTime, endsOn: DateTime, feeCents: number, remark: string): Promise<BaseResponse<ContractDto>> {
        return await this
            .request(`/merchants/${merchantId}/contracts`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                starts_on: startsOn.toISO(),
                ends_on: endsOn.toISO(),
                fee_cents: feeCents,
                remark: remark || undefined
            })
            .runAdapter(MerchantAdapter.parseContract);
    }

    async put(merchantId: string, contractId: string, startsOn: DateTime, endsOn: DateTime, feeCents: number, remark: string): Promise<BaseResponse<ContractDto>> {
        return await this
            .request(`/merchants/${merchantId}/contracts/${contractId}`)
            .method('put')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body({
                starts_on: startsOn.toISO(),
                ends_on: endsOn.toISO(),
                fee_cents: feeCents,
                remark: remark || undefined
            })
            .runAdapter(MerchantAdapter.parseContract);
    }
}
