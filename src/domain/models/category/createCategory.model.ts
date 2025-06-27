export class CreateCategoryModel {
  constructor(
    public name: string,
    public description: string,
    public id?:  number,
    public code?: number
  ) {}
}
