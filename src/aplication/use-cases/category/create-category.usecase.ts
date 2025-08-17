import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { CreateCategoryDto } from '../../../presentation/dtos/category/create-category.dto';
import { CategoryModel } from '../../../domain/models/category/category.model';
import { CategoryDtoMapper } from '../../mappers/category/create-category-dto.mapper';

export class CreateCategoryUseCase {
  constructor(
    @Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository
  ) {}

  async execute(data: CreateCategoryDto): Promise<void> {
    const categoryModel: CategoryModel = CategoryDtoMapper.dtoToModel(data);
    const existingCategory: CategoryModel | null = await this.categoryRepository.findByName(
      categoryModel.name
    );
    if (existingCategory) {
      throw new HttpException(
        `La categoria con el nombre : ${existingCategory.name} ya existe`,
        HttpStatus.CONFLICT
      );
    }
    await this.categoryRepository.create(categoryModel);
  }
}
