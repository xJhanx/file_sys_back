import { UserModel } from '../../domain/models/user/user.model';
import { UserOrmEntity } from '../database/typeorm/entities/user.entity';

export class UserMapper {
  static toModel(user: UserOrmEntity | null): UserModel | null {
    if (!user) return null;
    return new UserModel(user.id,user.name, user.last_name,user.email,user.refresh_token,user.password);
  }
}