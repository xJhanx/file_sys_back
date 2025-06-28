export class UpdateUserModel {
  constructor(
    public id: number,
    public name: string,
    public last_name: string,
    public email: string,
    public refresh_token: string,
    public password: string
  ) {
  }

  modifyPassword(newPassword: string): void {
    this.password = newPassword;
  }
}