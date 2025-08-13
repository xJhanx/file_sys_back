import { CreateProductModel } from '../../models/product/create-product';
import { CreateProductDto } from '../../../presentation/dtos/product/create-product';

export abstract class CreateProductDtoMapper {
  static dtoToModel(dto: CreateProductDto): CreateProductModel {
    return new CreateProductModel(
      dto.name,
      dto.description,
      dto.price,
      dto.stock,
      dto.category_id,
      dto.expires_at
    );
  }
}
