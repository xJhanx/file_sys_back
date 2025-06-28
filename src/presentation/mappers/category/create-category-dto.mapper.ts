import { CreateCategoryDto } from '../../dtos/category/create-category.dto';
import { CreateCategoryModel } from '../../../domain/models/category/create-category.model';

export class CreateCategoryDtoMapper {
  static dtoToModel(data: CreateCategoryDto): CreateCategoryModel
  {
    return new CreateCategoryModel(data.name || '', data.description || '', data?.code);
  }
}