import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, EventAdapter, FileSystemAdapter, PaymentAdapter } from '#data/adapter';
import { ProductDto } from '#data/dto';
import { optional, optionalArray } from '#data/util';

@adapter
export class ProductAdapter {
    static parseProduct(data: ForeignData): ProductDto {
        return new ProductDto(
            data.id,
            data.type,
            data.name,
            data.description,
            optional(data.price, PaymentAdapter.parseCost),
            data.max_quantity,
            data.is_active,
            data.is_swappable,
            data.remaining_stock,
            optional(data.stock_pool, EventAdapter.parseStockPool),
            optional(data.image, FileSystemAdapter.parsePicture),
            optionalArray(data.images, FileSystemAdapter.parsePicture)!,
            optional(data.tickets_released_on, DateTimeAdapter.parseDateTime)
        );
    }
}
