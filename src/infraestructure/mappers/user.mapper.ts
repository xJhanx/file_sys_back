import { User } from '../../domain/models/User';
import { UserOrmEntity } from '../database/typeorm/entities/user.entity';

export class UserMapper {
  static toModel(user: UserOrmEntity | null): User | null {
    if (!user) return null;
    return new User(user.name, user.last_name,user.email,user.refresh_token,user.password,user.id);
  }
}