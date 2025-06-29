export class CategoryModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public code?: number
  ) {}

  changeName(newName: string): void {
    this.name = newName;
  }

  changeDescription(newDescription: string): void {
    this.description = newDescription;
  }

  changeCode(newCode: number): void {
    this.code = newCode;
  }
}
