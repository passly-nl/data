import { adapter, ForeignData } from '@basmilius/http-client';
import { EventAdapter, FileSystemAdapter, PaymentAdapter } from '../adapter';
import { ProductDto } from '../dto';
import { optional, optionalArray } from '../util';

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
            optionalArray(data.images, FileSystemAdapter.parsePicture)!
        );
    }
}
