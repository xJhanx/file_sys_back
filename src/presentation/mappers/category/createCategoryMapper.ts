import { CreateCategoryDto } from '../../dtos/category/create-category.dto';
import { Category } from '../../../domain/models/Category';

export class CreateCategoryMapper {
  static toEntity(dto: CreateCategoryDto): Category {
    return new Category(dto.name,dto.description,dto?.code);
  }
}