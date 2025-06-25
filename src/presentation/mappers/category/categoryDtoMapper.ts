import { Category } from '../../../domain/models/Category';
import { CreateCategoryDto } from '../../dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../dtos/category/edit-category.dto';

export class CategoryDtoMapper {
  static dtoToModel(data: CreateCategoryDto | UpdateCategoryDto): Category
  {
    return new Category(data.name || '', data.description || '', data?.code);
  }
}