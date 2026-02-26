import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, FileSystemAdapter } from '#data/adapter';
import { TotpStateDto, UserDto, UserTokenDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class AuthAdapter {
    static parseTotpState(data: ForeignData): TotpStateDto {
        return new TotpStateDto(
            data.enabled,
            data.secret,
            data.qr
        );
    }

    static parseUser(data: ForeignData): UserDto {
        return new UserDto(
            data.id,
            data.email,
            data.first_name,
            data.last_name,
            data.full_name,
            data.initials,
            data.phone_number,
            data.is_online,
            optional(data.picture, FileSystemAdapter.parsePicture)
        );
    }

    static parseUserToken(data: ForeignData): UserTokenDto {
        return new UserTokenDto(
            data.token,
            data.type,
            data.browser,
            data.operating_system,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.expires_on),
            data.realtime_channel,
            optional(data.user, AuthAdapter.parseUser)
        );
    }
}
