import { ProductModel } from '../models/product/product.model';

export interface ProductRepository {
  create(product : ProductModel): Promise<void>;
  findByName(name : string): Promise<any>;
}