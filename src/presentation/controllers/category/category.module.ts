import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryOrmEntity } from '../../../infraestructure/database/typeorm/entities/category.entity';
import { CategoryRepositoryImpl } from '../../../infraestructure/database/typeorm/repositories/category/category.repository.impl';
import { DeleteCategoryUseCase } from '../../../aplication/use-cases/category/delete-catecory.usecase';
import { UpdateCategoryUseCase } from '../../../aplication/use-cases/category/update-category.usecase';
import { CreateCategoryUseCase } from '../../../aplication/use-cases/category/create-category.usecase';

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
