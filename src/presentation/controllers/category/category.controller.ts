import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CreateCategoryDto } from '../../dtos/category/create-category.dto';
import { CreateCategoryUseCase } from '../../../aplication/use-cases/category/create-category-useCase';
import { CategoryDtoMapper } from '../../mappers/category/categoryDtoMapper';
import { DeleteCategoryUseCase } from '../../../aplication/use-cases/category/delete-catecory-useCase';
import { UpdateCategoryUseCase } from '../../../aplication/use-cases/category/update-category.useCase';
import { UpdateCategoryDto } from '../../dtos/category/edit-category.dto';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly  createCategoryUseCase: CreateCategoryUseCase,
    private readonly  deleteCategoryUseCase : DeleteCategoryUseCase,
    private readonly updateCategoryRepository: UpdateCategoryUseCase) {
  }
  @Post()
  async createCategory(@Body() data : CreateCategoryDto){
    const dataEntity = CategoryDtoMapper.dtoToModel(data);
    await this.createCategoryUseCase.execute(dataEntity);
  }

  @Patch('/:id')
  async updateCategory(@Param('id') id: number, @Body() data: UpdateCategoryDto) : Promise<void> {
    await this.updateCategoryRepository.execute(id, data);
  }

  @Delete('/:id')
  async deleteCategory(@Param('id') id : number) : Promise<void> {
    await this.deleteCategoryUseCase.execute(id);
  }
}
