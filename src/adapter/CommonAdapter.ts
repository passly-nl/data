import { adapter } from '@basmilius/http-client';
import { StatusResponseDto } from '#data/dto';

@adapter
export class CommonAdapter {
    static parseStatusResponseFromObject(response: Record<string, any>): StatusResponseDto {
        return new StatusResponseDto(
            response.message,
            response.status
        );
    }
}
