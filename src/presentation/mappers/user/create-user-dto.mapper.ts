import { CreateUserDto } from '../../dtos/user/create-user.dto';
import { CreateUserModel } from '../../../domain/models/user/create-user.model';

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