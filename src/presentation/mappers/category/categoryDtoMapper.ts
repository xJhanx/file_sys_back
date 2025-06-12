import { Category } from '../../../domain/models/Category';
import { CreateCategoryDto } from '../../dtos/category/create-category.dto';

export class CategoryDtoMapper {
  static dtoToModel(data: CreateCategoryDto): Category
  {
    return new Category(data.name, data.description, data?.code);
  }
}