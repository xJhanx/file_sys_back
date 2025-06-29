import { UpdateUserDto } from '../../../presentation/dtos/user/update-user.dto';
import { UpdateUserModel } from '../../models/user/update-user.model';

export class UpdateUserDtoMapper {
  static toModel(id: number, data: UpdateUserDto): UpdateUserModel {
    return new UpdateUserModel(
      id,
      data.name,
      data.last_name,
      data.email,
      data.refresh_token,
      data.password
    );
  }
}
