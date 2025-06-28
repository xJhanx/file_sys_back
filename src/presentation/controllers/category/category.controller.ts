import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CreateCategoryUseCase } from '../../../aplication/use-cases/category/create-category.usecase';
import { DeleteCategoryUseCase } from '../../../aplication/use-cases/category/delete-catecory.usecase';
import { UpdateCategoryUseCase } from '../../../aplication/use-cases/category/update-category.usecase';
import { UpdateCategoryDto } from '../../dtos/category/update-category.dto';
import { CreateCategoryDto } from '../../dtos/category/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly  createCategoryUseCase: CreateCategoryUseCase,
    private readonly  deleteCategoryUseCase : DeleteCategoryUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase) {
  }
  @Post()
  async createCategory(@Body() data : CreateCategoryDto){
    await this.createCategoryUseCase.execute(data);
  }

  @Patch('/:id')
  async updateCategory(@Param('id') id: number, @Body() data: UpdateCategoryDto) : Promise<void> {
    await this.updateCategoryUseCase.execute(id, data);
  }

  @Delete('/:id')
  async deleteCategory(@Param('id') id : number) : Promise<void> {
    await this.deleteCategoryUseCase.execute(id);
  }
}
