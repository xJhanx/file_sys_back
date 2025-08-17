import { CreateProductDto } from '../../../presentation/dtos/product/create-product';
import { ProductModel } from '../../../domain/models/product/product.model';

export abstract class CreateProductDtoMapper {
  static dtoToModel(dto: CreateProductDto): ProductModel {
    return new ProductModel(
      null,
      dto.name,
      dto.description,
      dto.price,
      dto.stock,
      dto.category_id,
      dto.expires_at
    );
  }
}
