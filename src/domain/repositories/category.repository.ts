import { CategoryModel } from '../models/category/category.model';

export interface CategoryRepository {
  create(data: CategoryModel): Promise<void>;
  findByName(name : string): Promise<CategoryModel | null>;
  findById(id: number): Promise<CategoryModel | null>;
  update (data: CategoryModel): Promise<void>;
  delete(id: number): Promise<void>;
}
