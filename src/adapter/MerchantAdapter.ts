import { adapter, ForeignData } from '@basmilius/http-client';
import { AddressAdapter, AuthAdapter, DateTimeAdapter, FileSystemAdapter, PaymentAdapter } from '#data/adapter';
import { ContractDto, InvitationDto, MerchantDto, MerchantUserDto, VatNumberDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class MerchantAdapter {
    static parseContract(data: ForeignData): ContractDto {
        return new ContractDto(
            data.id,
            DateTimeAdapter.parseDateTime(data.starts_on),
            DateTimeAdapter.parseDateTime(data.ends_on),
            PaymentAdapter.parseCost(data.fee),
            data.remark
        );
    }

    static parseInvitation(data: ForeignData): InvitationDto {
        return new InvitationDto(
            data.id,
            data.merchant_id,
            data.user_id,
            data.claims,
            data.is_new_user,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on),
            MerchantAdapter.parseMerchant(data.merchant),
            AuthAdapter.parseUser(data.user)
        );
    }

    static parseMerchant(data: ForeignData): MerchantDto {
        return new MerchantDto(
            data.id,
            data.name,
            data.email,
            data.phone_number,
            data.url,
            data.chamber_of_commerce_number,
            data.vat_number,
            data.currency,
            optional(data.address, AddressAdapter.parseAddress),
            optional(data.current_contract, MerchantAdapter.parseContract),
            optional(data.logo, FileSystemAdapter.parsePicture),
            optional(data.created_on, DateTimeAdapter.parseDateTime),
            optional(data.updated_on, DateTimeAdapter.parseDateTime)
        );
    }

    static parseMerchantUser(data: ForeignData): MerchantUserDto {
        return new MerchantUserDto(
            data.is_manager,
            data.claims ?? [],
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on),
            AuthAdapter.parseUser(data.user)
        );
    }

    static parseVatNumber(data: ForeignData): VatNumberDto {
        return new VatNumberDto(
            data.id,
            data.vat_number,
            data.name,
            data.address,
            data.country_code,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }
}
