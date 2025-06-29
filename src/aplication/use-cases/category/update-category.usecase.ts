import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { UpdateCategoryDto } from '../../../presentation/dtos/category/update-category.dto';
import { UpdateCategoryDtoMapper } from '../../mappers/category/update-category-dto.mapper';
import { UpdateCategoryModel } from '../../models/category/update-category.model';
import { CategoryModel } from '../../../domain/models/category/category.model';

export class UpdateCategoryUseCase {
  constructor(
    @Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository
  ) {}

  async execute(id: number, categoryDto: UpdateCategoryDto): Promise<void> {
    const category: CategoryModel | null = await this.categoryRepository.findById(id);

    if (!category) {
      throw new HttpException(`Category with id ${id} not found`, HttpStatus.NOT_FOUND);
    }

    // Update the category properties
    if (categoryDto.name !== undefined) {
      category.changeName(categoryDto.name);
    }
    if (categoryDto.description !== undefined) {
      category.changeDescription(categoryDto.description);
    }
    if (categoryDto.code !== undefined) {
      category.changeCode(categoryDto.code);
    }

    await this.categoryRepository.update(category);
  }
}
