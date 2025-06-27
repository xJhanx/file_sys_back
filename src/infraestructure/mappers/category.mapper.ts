import { CategoryOrmEntity } from '../database/typeorm/entities/category.entity';
import { CategoryModel } from '../../domain/models/category/category.model';

export class CategoryOrmMapper {
  static ormToModel(data: CategoryOrmEntity): CategoryModel {
    return new CategoryModel(data.id ,data.name, data.description, data.id);
  }
}
