import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { AuthAdapter, CommonAdapter, MerchantAdapter, PaymentAdapter } from '../adapter';
import type { ContractDto, MerchantDto, PaymentProviderDto, StatusResponseDto, UserDto, VatNumberDto } from '../dto';
import type { Claim } from '../types';
import { emptyNull } from '../util';

export class MerchantService extends BaseService {
    async get(merchantId: string): Promise<BaseResponse<MerchantDto>> {
        return await this
            .request(`/merchants/${merchantId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(MerchantAdapter.parseMerchantFromObject);
    }

    async getAccountManager(merchantId: string): Promise<BaseResponse<UserDto | null>> {
        return await this
            .request(`/merchants/${merchantId}/account-manager`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(AuthAdapter.parseUserFromObject);
    }

    async getClaims(merchantId: string): Promise<BaseResponse<Claim[]>> {
        return await this
            .request(`/merchants/${merchantId}/claims`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(r => Object.values(r) as Claim[]);
    }

    async getContract(merchantId: string): Promise<BaseResponse<ContractDto>> {
        return await this
            .request(`/merchants/${merchantId}/contract`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(MerchantAdapter.parseContractFromObject);
    }

    async getPaymentProviders(merchantId: string): Promise<BaseResponse<PaymentProviderDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/payment-providers`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runArrayAdapter(PaymentAdapter.parsePaymentProviderFromObject);
    }

    async getVatNumber(merchantId: string): Promise<BaseResponse<VatNumberDto>> {
        return await this
            .request(`/merchants/${merchantId}/vat-number`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(MerchantAdapter.parseVatNumberFromObject);
    }

    async put(merchantId: string, merchant: MerchantDto): Promise<BaseResponse<MerchantDto>> {
        return await this
            .request(`/merchants/${merchantId}`)
            .method('put')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .body({
                name: merchant.name,
                email: merchant.email,
                phone_number: merchant.phoneNumber,
                url: merchant.url,
                chamber_of_commerce_number: merchant.chamberOfCommerceNumber,
                vat_number: merchant.vatNumber,
                address: {
                    label: emptyNull(merchant.address.label),
                    street: merchant.address.street,
                    number: merchant.address.number,
                    postal_code: merchant.address.postalCode,
                    city: merchant.address.city,
                    country_code: merchant.address.country
                }
            })
            .runAdapter(MerchantAdapter.parseMerchantFromObject);
    }

    async postLogo(merchantId: string, picture: File): Promise<BaseResponse<StatusResponseDto>> {
        const data = new FormData();
        data.append('file', picture);

        return await this
            .request(`/merchants/${merchantId}/logo`)
            .method('post')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .body(data)
            .runAdapter(CommonAdapter.parseStatusResponseFromObject);
    }

    async deleteLogo(merchantId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/logo`)
            .method('delete')
            .bearerToken()
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .runAdapter(CommonAdapter.parseStatusResponseFromObject);
    }
}
