import { CreateProductModel } from '../../aplication/models/product/create-product';

export interface ProductRepository {
  create(product : CreateProductModel): Promise<void>;
  findByName(name : string): Promise<any>;
}