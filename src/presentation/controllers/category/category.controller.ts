import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from '../../dtos/category/create-category.dto';
import { CreateCategoryUseCase } from '../../../aplication/use-cases/category/create-category-useCase';
import { CategoryDtoMapper } from '../../mappers/category/categoryDtoMapper';

@Controller('category')
export class CategoryController {
  constructor(private readonly  createCategoryUseCase: CreateCategoryUseCase) {
  }
  @Post()
  async createCategory(@Body() data : CreateCategoryDto){
    const dataEntity = CategoryDtoMapper.dtoToModel(data);
    await this.createCategoryUseCase.execute(dataEntity);
  }
}
