export class UpdateUserModel {
  constructor(
    public name: string,
    public last_name: string,
    public email: string,
    public refresh_token: string,
    public password?: string,
    public id?: number
  ) {}

  modifyPassword(newPassword: string): void {
    this.password = newPassword;
  }
}