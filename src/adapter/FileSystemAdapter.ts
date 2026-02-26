import { adapter, ForeignData } from '@basmilius/http-client';
import { PictureDto } from '../dto';

@adapter
export class FileSystemAdapter {
    static parsePicture(data: ForeignData): PictureDto {
        return new PictureDto(
            data.id,
            data.url,
            data.variants
        );
    }
}
