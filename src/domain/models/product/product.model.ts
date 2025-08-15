export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
    public category_id: number,
    public expires_at: Date,
    public created_at: Date,
    public updated_at: Date
  ){}
}