export class CreateProductModel {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
    public category_id: number,
    public expires_at: string
  ){}
}
