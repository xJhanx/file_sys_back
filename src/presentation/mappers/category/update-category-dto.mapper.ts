import { UpdateCategoryDto } from '../../dtos/category/update-category.dto';
import { UpdateCategoryModel } from '../../../domain/models/category/update-category.model';

export class UpdateCategoryDtoMapper {
  static dtoToModel(id : number,data: UpdateCategoryDto): UpdateCategoryModel
  {
    return new UpdateCategoryModel(id, data.name || '', data.description || '', data?.code);
  }
}