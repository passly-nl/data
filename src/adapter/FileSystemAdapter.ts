import { adapter } from '@basmilius/http-client';
import { PictureDto } from '#data/dto';

@adapter
export class FileSystemAdapter {
    static parsePictureFromObject(picture: Record<string, any>): PictureDto {
        return new PictureDto(
            picture.id,
            picture.url,
            picture.variants
        );
    }
}
