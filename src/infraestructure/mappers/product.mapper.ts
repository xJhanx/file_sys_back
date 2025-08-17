import { ProductModel } from '../../domain/models/product/product.model';
import { ProductOrmEntity } from '../database/typeorm/entities/product.entity';


export class ProductOrmMapper {
  static ormToModel(data: ProductOrmEntity): ProductModel {
    return new ProductModel(
      data.id,
      data.name,
      data.description,
      data.price,
      data.stock,
      data.category.id,
      data.expires_at,
      data.created_at,
      data.updated_at
    );
  }
}
