import { adapter, ForeignData } from '@basmilius/http-client';
import { StatusResponseDto } from '../dto';

@adapter
export class CommonAdapter {
    static parseStatusResponse(data: ForeignData): StatusResponseDto {
        return new StatusResponseDto(
            data.message,
            data.status
        );
    }
}
