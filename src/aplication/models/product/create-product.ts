export class CreateProductModel {

  public category : {id : number | undefined} = {id: undefined};

  constructor(
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
    category_id: number,
    public expires_at: string
  ){
    this.category.id = category_id;
    this.nameToLowerCase();
  }
  nameToLowerCase(): void {
    this.name = this.name.toLowerCase();
  }
}
