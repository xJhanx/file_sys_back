import { UpdateCategoryDto } from '../../../presentation/dtos/category/update-category.dto';
import { UpdateCategoryModel } from '../../models/category/update-category.model';

export class UpdateCategoryDtoMapper {
  static dtoToModel(id : number,data: UpdateCategoryDto): UpdateCategoryModel
  {
    return new UpdateCategoryModel(id, data.name || '', data.description || '', data?.code);
  }
}