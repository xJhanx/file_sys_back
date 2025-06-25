import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CreateCategoryUseCase } from '../../../aplication/use-cases/category/create-category-useCase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryOrmEntity } from '../../../infraestructure/database/typeorm/entities/category.entity';
import { CategoryRepositoryImpl } from '../../../infraestructure/database/typeorm/repositories/category/category.repository.impl';
import { DeleteCategoryUseCase } from '../../../aplication/use-cases/category/delete-catecory-useCase';
import { UpdateCategoryUseCase } from '../../../aplication/use-cases/category/update-category.useCase';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryOrmEntity])],
  controllers: [CategoryController],
  providers: [
    CreateCategoryUseCase,
    DeleteCategoryUseCase,
    UpdateCategoryUseCase,
    {
      provide: 'CategoryRepository',
      useClass: CategoryRepositoryImpl,
    },
  ],
})
export class CategoryModule {}
