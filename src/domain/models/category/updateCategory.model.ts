export class UpdateCategoryModel {
  constructor(
    public id:  number,
    public name?: string,
    public description?: string,
    public code?: number
  ) {}
}