import { UpdateUserDto } from '../../../presentation/dtos/user/update-user.dto';
import { UpdateUserDtoMapper } from '../../../presentation/mappers/user/update-user-dto.mapper';
import { Inject } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';

export class UpdateUserUseCase {
  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

  async execute(id: number, data: UpdateUserDto) {
    const userModel = UpdateUserDtoMapper.toModel(id, data);
    const existingUser = await this.userRepository.findById(id);
  }
}
