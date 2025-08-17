export class ProductModel {
  constructor(
    public id: number | null = null,
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
    public category_id: number,
    public expires_at?: string,
    public created_at?: Date,
    public updated_at?: Date
  ){
    this.nameToLowerCase();
  }
  nameToLowerCase(): void {
    this.name = this.name.toLowerCase();
  }
}