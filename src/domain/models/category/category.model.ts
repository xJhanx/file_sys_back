import { ProductModel } from '../product/product.model';

export class CategoryModel {
  constructor(
    public name: string,
    public description: string,
    public code: number | null,
    public products: ProductModel[] = [],
    public created_at?: Date,
    public updated_at?: Date,
    public id?: number,
  ) {}

  static create(name: string, description: string, code: number | null = null): CategoryModel {
    return new CategoryModel(name, description, code);
  }

  changeName(newName: string): void {
    this.name = newName;
  }

  changeDescription(newDescription: string): void {
    this.description = newDescription;
  }

  changeCode(newCode: number | null): void {
    this.code = newCode;
  }
}
