import { adapter } from '@basmilius/http-client';
import { DateTimeAdapter, FileSystemAdapter } from '../adapter';
import { TotpStateDto, UserDto, UserTokenDto } from '../dto';
import { optional } from '../util';

@adapter
export class AuthAdapter {
    static parseTotpStateFromObject(state: Record<string, any>): TotpStateDto {
        return new TotpStateDto(
            state.enabled,
            state.secret,
            state.qr
        );
    }

    static parseUserFromObject(user: Record<string, any>): UserDto {
        return new UserDto(
            user.id,
            user.email,
            user.first_name,
            user.last_name,
            user.full_name,
            user.initials,
            user.phone_number,
            user.is_online,
            optional(user.picture, FileSystemAdapter.parsePictureFromObject)
        );
    }

    static parseUserTokenFromObject(token: Record<string, any>): UserTokenDto {
        return new UserTokenDto(
            token.token,
            token.type,
            token.browser,
            token.operating_system,
            DateTimeAdapter.parseDateTimeFromString(token.created_on),
            DateTimeAdapter.parseDateTimeFromString(token.expires_on),
            token.realtime_channel,
            optional(token.user, AuthAdapter.parseUserFromObject)
        );
    }
}
