import { UserModel } from '../../domain/models/user/UserModel';
import { UserOrmEntity } from '../database/typeorm/entities/user.entity';

export class UserMapper {
  static toModel(user: UserOrmEntity | null): UserModel | null {
    if (!user) return null;
    return new UserModel(user.name, user.last_name,user.email,user.refresh_token,user.password,user.id);
  }
}