import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { UpdateCategoryDto } from '../../../presentation/dtos/category/update-category.dto';
import { UpdateCategoryDtoMapper } from '../../../presentation/mappers/category/update-category-dto.mapper';
import { UpdateCategoryModel } from '../../../domain/models/category/update-category.model';

export class UpdateCategoryUseCase {
  constructor(
    @Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository
  ) {}

  async execute(id: number, categoryDto: UpdateCategoryDto): Promise<void> {
    const data: UpdateCategoryModel = UpdateCategoryDtoMapper.dtoToModel(id,categoryDto);
    data.id = id;

    const category : UpdateCategoryModel | null = await this.categoryRepository.findById(id);

    if (!category) {
      throw new HttpException(`Category with id ${id} not found`,HttpStatus.NOT_FOUND);
    }

    // Update the category properties
    if (data.name !== undefined) {
      category.name = data.name;
    }
    if (data.description !== undefined) {
      category.description = data.description;
    }
    if (data.code !== undefined) {
      category.code = data.code;
    }

    await this.categoryRepository.update(category);
  }
}