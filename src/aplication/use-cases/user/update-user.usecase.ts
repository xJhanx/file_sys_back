import { UpdateUserDto } from '../../../presentation/dtos/user/update-user.dto';
import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserModel } from '../../../domain/models/user/user.model';
import { UpdateUserDtoMapper } from '../../mappers/user/update-user-dto.mapper';
import { UpdateUserModel } from '../../models/user/update-user.model';
import { PasswordHashRepository } from '../../../domain/repositories/password-hash.repository';

export class UpdateUserUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('PasswordHashRepository') private readonly passwordRepository: PasswordHashRepository
  ) {}

  async execute(id: number, data: UpdateUserDto) {
    const existingUser: UserModel | null = await this.userRepository.findById(id);
    const updateUserModel: UpdateUserModel = UpdateUserDtoMapper.toModel(id, data);

    if(updateUserModel.password){
      const hashedPassword : string = await this.passwordRepository.hashPassword(updateUserModel.password);
      updateUserModel.modifyPassword(hashedPassword);
    }
    if (!existingUser) {
      throw new HttpException(`User with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    updateUserModel.applyTo(existingUser);
    return this.userRepository.update(existingUser);
  }
}
