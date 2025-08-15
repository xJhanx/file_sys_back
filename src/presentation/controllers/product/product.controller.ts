import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from '../../dtos/product/create-product';
import { CreateProductUseCase } from '../../../aplication/use-cases/product/crate-product.usecase';

@Controller('product')
export class ProductController {
constructor(private readonly createProductUseCase: CreateProductUseCase) {}
  @Post()
  create(@Body() product : CreateProductDto) {
   return this.createProductUseCase.execute(product);
  }
}
