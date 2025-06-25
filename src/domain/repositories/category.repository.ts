import { Category } from '../models/Category';
import { UpdateResult } from 'typeorm';

export interface CategoryRepository {
  create(data: Category): Promise<void>;
  findByName(name : string): Promise<Category | null>;
  findById(id: number): Promise<Category | null>;
  update (data: Category): Promise<void>;
  delete(id: number): Promise<void>;
}
