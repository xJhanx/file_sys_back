import { CategoryOrmEntity } from '../database/typeorm/entities/category.entity';
import { CategoryModel } from '../../domain/models/category/category.model';
import { ProductOrmMapper } from './product.mapper';
import { ProductModel } from '../../domain/models/product/product.model';

export class CategoryOrmMapper {
  static ormToModel(data: CategoryOrmEntity): CategoryModel {
    const products: ProductModel[] = data.products
      ? data.products.map(ProductOrmMapper.ormToModel)
      : [];
    return new CategoryModel(
      data.name,
      data.description,
      data.code,
      products,
      data.created_at,
      data.updated_at,
      data.id
    );
  }
}
