import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from '../../dtos/product/create-product';

@Controller('product')
export class ProductController {

  @Post()
  create(@Body() product : CreateProductDto) {
    // Logic to create a product will go here
    return product;
    throw 'method not implemented';
  }
}
