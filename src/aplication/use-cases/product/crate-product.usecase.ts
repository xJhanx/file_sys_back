import { CreateProductDtoMapper } from '../../mappers/product/create-product-dto.mapper';
import { CreateProductDto } from '../../../presentation/dtos/product/create-product';
import { ProductRepository } from '../../../domain/repositories/product.repository';
import { Inject } from '@nestjs/common';
import { ProductModel } from '../../../domain/models/product/product.model';

export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly productRepository: ProductRepository
  ) {}

  execute(productDto: CreateProductDto) {
    const product : ProductModel = CreateProductDtoMapper.dtoToModel(productDto);
    return this.productRepository.create(product);
  }
}
