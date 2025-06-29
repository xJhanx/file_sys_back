import { UserModel } from '../../../domain/models/user/user.model';

export class UpdateUserModel {
  constructor(
    public id: number,
    public name?: string,
    public last_name?: string,
    public email?: string,
    public refresh_token?: string,
    public password?: string
  ) {}

  isNameDefined(): boolean {
    return this.name !== undefined && this.name?.trim() !== '' && this.name !== null;
  }

  isLastNameDefined(): boolean {
    return this.last_name !== undefined && this.last_name?.trim() !== '' && this.last_name !== null;
  }

  isEmailDefined(): boolean {
    return this.email !== undefined && this.email?.trim() !== '' && this.email !== null;
  }

  isRefreshTokenDefined(): boolean {
    return this.refresh_token !== undefined && this.refresh_token?.trim() !== '' && this.refresh_token !== null;
  }

  isPasswordDefined(): boolean {
    return this.password !== undefined && this.password?.trim() !== '' && this.password !== null;
  }

  applyTo(user: UserModel): void {
    if (this.isNameDefined()) {
      user.changeName(this.name!);
    }
    if (this.isLastNameDefined()) {
      user.changeLastName(this.last_name!);
    }
    if (this.isEmailDefined()) {
      user.changeEmail(this.email!);
    }
    if (this.isPasswordDefined()) {
      user.modifyPassword(this.password!);
    }
    if (this.isRefreshTokenDefined()) {
      user.changeRefreshToken(this.refresh_token!);
    }
  }

  modifyPassword(newPassword: string): void {
    this.password = newPassword;
  }
}
