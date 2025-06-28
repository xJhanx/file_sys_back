import { Inject } from '@nestjs/common';
import { CategoryRepository } from '../../../domain/repositories/category.repository';

export class DeleteCategoryUseCase {
  constructor(
    @Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository
  ) {}

  async execute(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
