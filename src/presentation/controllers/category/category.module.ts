import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CreateCategoryUseCase } from '../../../aplication/use-cases/category/create-category-useCase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryOrmEntity } from '../../../infraestructure/database/typeorm/entities/category.entity';
import { CategoryRepositoryImpl } from '../../../infraestructure/database/typeorm/repositories/category/category.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryOrmEntity])],
  controllers: [CategoryController],
  providers: [
    CreateCategoryUseCase,
    {
      provide: 'CategoryRepository',
      useClass: CategoryRepositoryImpl,
    },
  ],
})
export class CategoryModule {}
