import { CategoryOrmEntity } from '../database/typeorm/entities/category.entity';
import { Category } from '../../domain/models/Category';

export class CategoryOrmMapper {
  static ormToModel(data: CategoryOrmEntity): Category {
    return new Category(data.name, data.description, data.id);
  }
}
