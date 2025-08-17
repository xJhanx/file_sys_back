export class UserModel {
  constructor(
    public name: string,
    public last_name: string,
    public email: string,
    public refresh_token: string | null,
    public password: string,
    public id?: number,
  ) {}

  static  create(name : string,last_name : string,email : string,password : string): UserModel {
    return new UserModel(name,last_name,email,null,password);
  }
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
