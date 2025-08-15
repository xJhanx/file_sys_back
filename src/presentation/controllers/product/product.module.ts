import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import {
  ProductRepositoryImpl
} from '../../../infraestructure/database/typeorm/repositories/product/product.repository.impl';
import { CreateProductUseCase } from '../../../aplication/use-cases/product/crate-product.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrmEntity } from '../../../infraestructure/database/typeorm/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductOrmEntity])],
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    {
      provide: 'ProductRepository',
      useClass: ProductRepositoryImpl,
    }
  ]
})
export class ProductModule {}
