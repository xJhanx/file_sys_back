import { Category } from '../models/Category';

export interface CategoryRepository {
  create(data: Category): Promise<void>;
  findByName(name : string): Promise<Category | null>;
}
