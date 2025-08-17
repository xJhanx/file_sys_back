import { UpdateCategoryDto } from '../../../presentation/dtos/category/update-category.dto';
import { CategoryModel } from '../../../domain/models/category/category.model';

export class UpdateCategoryDtoMapper {
  static dtoToModel(id : number,data: UpdateCategoryDto): CategoryModel
  {
    return {} as any;
  }
}