import { adapter } from '@basmilius/http-client';
import { AddressAdapter, AuthAdapter, DateTimeAdapter, FileSystemAdapter, PaymentAdapter } from '#data/adapter';
import { ContractDto, InvitationDto, MerchantDto, MerchantUserDto, VatNumberDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class MerchantAdapter {
    static parseContractFromObject(contract: Record<string, any>): ContractDto {
        return new ContractDto(
            contract.id,
            DateTimeAdapter.parseDateTimeFromString(contract.starts_on),
            DateTimeAdapter.parseDateTimeFromString(contract.ends_on),
            PaymentAdapter.parseCostFromObject(contract.fee),
            contract.remark
        );
    }

    static parseInvitationFromObject(invitation: Record<string, any>): InvitationDto {
        return new InvitationDto(
            invitation.id,
            invitation.merchant_id,
            invitation.user_id,
            invitation.claims,
            invitation.is_new_user,
            DateTimeAdapter.parseDateTimeFromString(invitation.created_on),
            DateTimeAdapter.parseDateTimeFromString(invitation.updated_on),
            MerchantAdapter.parseMerchantFromObject(invitation.merchant),
            AuthAdapter.parseUserFromObject(invitation.user)
        );
    }

    static parseMerchantFromObject(merchant: Record<string, any>): MerchantDto {
        return new MerchantDto(
            merchant.id,
            merchant.name,
            merchant.email,
            merchant.phone_number,
            merchant.url,
            merchant.chamber_of_commerce_number,
            merchant.vat_number,
            merchant.currency,
            optional(merchant.address, AddressAdapter.parseAddressFromObject),
            optional(merchant.current_contract, MerchantAdapter.parseContractFromObject),
            optional(merchant.logo, FileSystemAdapter.parsePictureFromObject),
            optional(merchant.created_on, DateTimeAdapter.parseDateTimeFromString),
            optional(merchant.updated_on, DateTimeAdapter.parseDateTimeFromString)
        );
    }

    static parseMerchantUserFromObject(merchantUser: Record<string, any>): MerchantUserDto {
        return new MerchantUserDto(
            merchantUser.is_manager,
            DateTimeAdapter.parseDateTimeFromString(merchantUser.created_on),
            DateTimeAdapter.parseDateTimeFromString(merchantUser.updated_on),
            AuthAdapter.parseUserFromObject(merchantUser.user)
        );
    }

    static parseVatNumberFromObject(vatNumber: Record<string, any>): VatNumberDto {
        return new VatNumberDto(
            vatNumber.id,
            vatNumber.vat_number,
            vatNumber.name,
            vatNumber.address,
            vatNumber.country_code,
            DateTimeAdapter.parseDateTimeFromString(vatNumber.created_on),
            DateTimeAdapter.parseDateTimeFromString(vatNumber.updated_on)
        );
    }
}
