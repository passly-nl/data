import { adapter, ForeignData } from '@basmilius/http-client';
import { StatusResponseDto } from '#data/dto';

@adapter
export class CommonAdapter {
    static parseStatusResponse(data: ForeignData): StatusResponseDto {
        return new StatusResponseDto(
            data.message,
            data.status
        );
    }
}
