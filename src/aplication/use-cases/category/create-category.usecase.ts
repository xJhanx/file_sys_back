import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { CreateCategoryDtoMapper } from '../../../presentation/mappers/category/create-category-dto.mapper';
import { CreateCategoryDto } from '../../../presentation/dtos/category/create-category.dto';
import { CreateCategoryModel } from '../../../domain/models/category/create-category.model';
import { CategoryModel } from '../../../domain/models/category/category.model';

export class CreateCategoryUseCase {
  constructor(
    @Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository
  ) {}

  async execute(data: CreateCategoryDto) : Promise<void> {
    const categoryModel: CreateCategoryModel = CreateCategoryDtoMapper.dtoToModel(data);
    categoryModel.description = categoryModel.description.toLowerCase();
    const existingCategory : CategoryModel | null = await this.categoryRepository.findByName(categoryModel.name);
    if( existingCategory) {
      throw new HttpException(`La categoria con el nombre : ${existingCategory.name} ya existe`, HttpStatus.CONFLICT);
    }
    await this.categoryRepository.create(data);
  }
}
