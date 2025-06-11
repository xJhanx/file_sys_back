import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from '../../dtos/category/create-category.dto';
import { CreateCategoryUseCase } from '../../../aplication/use-cases/category/create-category-useCase';
import { CreateCategoryMapper } from '../../mappers/category/createCategoryMapper';
@Controller('category')
export class CategoryController {
  constructor(private readonly  createCategoryUseCase: CreateCategoryUseCase) {
  }
  @Post()
  async createCategory(@Body() data : CreateCategoryDto){
    const dataEntity = CreateCategoryMapper.toEntity(data);
    await this.createCategoryUseCase.execute(dataEntity);
  }
}
