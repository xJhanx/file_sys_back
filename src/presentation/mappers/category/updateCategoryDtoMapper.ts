import { UpdateCategoryDto } from '../../dtos/category/edit-category.dto';
import { UpdateCategoryModel } from '../../../domain/models/category/updateCategory.model';

export class UpdateCategoryDtoMapper {
  static dtoToModel(id : number,data: UpdateCategoryDto): UpdateCategoryModel
  {
    return new UpdateCategoryModel(id, data.name || '', data.description || '', data?.code);
  }
}