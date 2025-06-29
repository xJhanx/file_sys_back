export class UserModel {
  constructor(
    public id : number,
    public name: string,
    public last_name: string,
    public email: string,
    public refresh_token: string,
    public password: string,
  ) {}

  modifyPassword(newPassword: string): void {
    this.password = newPassword;
  }
  changeName(newName: string): void {
    this.name = newName;
  }
  changeLastName(newLastName: string): void {
    this.last_name = newLastName;
  }
  changeEmail(newEmail: string): void {
    this.email = newEmail;
  }
  changeRefreshToken(newRefreshToken: string): void {
    this.refresh_token = newRefreshToken;
  }
}
