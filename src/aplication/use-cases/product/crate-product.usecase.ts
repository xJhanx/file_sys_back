import { CreateProductDtoMapper } from '../../mappers/product/create-product-dto.mapper';
import { CreateProductDto } from '../../../presentation/dtos/product/create-product';

export class CreateProductUseCase {
  constructor() {
    // Initialization logic can go here if needed
  }

  execute(productDto : CreateProductDto) {
    const product = CreateProductDtoMapper.dtoToModel(productDto);
    return product as any;
  }
}