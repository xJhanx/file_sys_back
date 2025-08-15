import { CreateProductDtoMapper } from '../../mappers/product/create-product-dto.mapper';
import { CreateProductDto } from '../../../presentation/dtos/product/create-product';
import { ProductRepository } from '../../../domain/repositories/product.repository';
import { Inject } from '@nestjs/common';
import { CreateProductModel } from '../../models/product/create-product';

export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly productRepository: ProductRepository
  ) {}

  execute(productDto: CreateProductDto) {
    const product : CreateProductModel = CreateProductDtoMapper.dtoToModel(productDto);
    return this.productRepository.create(product);
  }
}
