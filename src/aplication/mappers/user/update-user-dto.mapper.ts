import { UpdateUserDto } from '../../../presentation/dtos/user/update-user.dto';
import { UserModel } from '../../../domain/models/user/user.model';

export class UpdateUserDtoMapper {
  static toModel(id: number, data: UpdateUserDto): UserModel {
    return new UserModel(
      data.name,
      data.last_name,
      data.email,
      data.refresh_token,
      data.password,
      id
    );
  }
}
