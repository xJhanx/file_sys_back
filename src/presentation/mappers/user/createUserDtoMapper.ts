import { CreateUserDto } from '../../dtos/user/user.dto';
import { CreateUserModel } from '../../../domain/models/user/createUser.model';

export class CreateUserDtoMapper {
  static toModel(dto: CreateUserDto): CreateUserModel {
    return new CreateUserModel(
      dto.name,
      dto.last_name,
      dto.email,
      dto.refresh_token,
      dto.password
    );
  }
}