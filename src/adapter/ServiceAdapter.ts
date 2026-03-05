import { adapter, type ForeignData } from '@basmilius/http-client';
import { ServiceInfoDto } from '#data/dto';

@adapter
export class ServiceAdapter {
    static parseInfo(data: ForeignData): ServiceInfoDto {
        return new ServiceInfoDto(
            data.connecting_ip,
            data.country,
            data.ray
        );
    }
}
