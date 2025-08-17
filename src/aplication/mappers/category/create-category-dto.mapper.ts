import { CreateCategoryDto } from '../../../presentation/dtos/category/create-category.dto';
import { CategoryModel } from '../../../domain/models/category/category.model';

export class CategoryDtoMapper {
  static dtoToModel(data: CreateCategoryDto): CategoryModel {
    return CategoryModel.create(data.name, data.description, data.code);
  }
}
