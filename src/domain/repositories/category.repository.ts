import { CreateCategoryModel } from '../models/category/create-category.model';
import { UpdateCategoryModel } from '../models/category/update-category.model';
import { CategoryModel } from '../models/category/category.model';


export interface CategoryRepository {
  create(data: CreateCategoryModel): Promise<void>;
  findByName(name : string): Promise<CategoryModel | null>;
  findById(id: number): Promise<CategoryModel | null>;
  update (data: UpdateCategoryModel): Promise<void>;
  delete(id: number): Promise<void>;
}
