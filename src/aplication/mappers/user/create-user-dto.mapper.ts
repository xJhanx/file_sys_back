import { CreateUserDto } from '../../../presentation/dtos/user/create-user.dto';
import { UserModel } from '../../../domain/models/user/user.model';

export class CreateUserDtoMapper {
  static toModel(dto: CreateUserDto): UserModel {
    return new UserModel(
      dto.name,
      dto.last_name,
      dto.email,
      dto.refresh_token,
      dto.password
    );
  }
}