import { adapter } from '@basmilius/http-client';
import { EventAdapter, FileSystemAdapter, PaymentAdapter } from '#data/adapter';
import { ProductDto } from '#data/dto';
import { optional, optionalArray } from '#data/util';

@adapter
export class ProductAdapter {
    static parseProductFromObject(product: Record<string, any>): ProductDto {
        return new ProductDto(
            product.id,
            product.type,
            product.name,
            product.description,
            optional(product.price, PaymentAdapter.parseCostFromObject),
            product.max_quantity,
            product.is_active,
            product.is_swappable,
            product.remaining_stock,
            optional(product.stock_pool, EventAdapter.parseStockPoolFromObject),
            optional(product.image, FileSystemAdapter.parsePictureFromObject),
            optionalArray(product.images, FileSystemAdapter.parsePictureFromObject)!
        );
    }
}
