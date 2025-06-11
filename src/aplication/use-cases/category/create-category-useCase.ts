import { Category } from '../../../domain/models/Category';
import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CategoryRepository } from '../../../domain/repositories/category.repository';

export class CreateCategoryUseCase {
  constructor(
    @Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository
  ) {}

  async execute(data: Category) : Promise<void> {
    data.description = data.description.toLowerCase();
    const existingCategory : Category | null = await this.categoryRepository.findByName(data.name);
    if( existingCategory) {
      throw new HttpException(`La categoria con el nombre : ${existingCategory.name} ya existe`, HttpStatus.CONFLICT);
    }
    await this.categoryRepository.create(data);
  }
}
