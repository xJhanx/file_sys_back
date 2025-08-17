import { UpdateUserDto } from '../../../presentation/dtos/user/update-user.dto';
import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserModel } from '../../../domain/models/user/user.model';
import { UpdateUserDtoMapper } from '../../mappers/user/update-user-dto.mapper';
import { PasswordHashRepository } from '../../../domain/repositories/password-hash.repository';

export class UpdateUserUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('PasswordHashRepository') private readonly passwordRepository: PasswordHashRepository
  ) {}

  async execute(id: number, data: UpdateUserDto) {
    const existingUser: UserModel | null = await this.userRepository.findById(id);
    const dataUpdateUser: UserModel = UpdateUserDtoMapper.toModel(id, data);

    if (!existingUser) {
      throw new HttpException(`User with id ${id} not found`, HttpStatus.NOT_FOUND);
    }

    if(dataUpdateUser.password){
      const hashedPassword : string = await this.passwordRepository.hashPassword(dataUpdateUser.password);
      dataUpdateUser.modifyPassword(hashedPassword);
    }

    if(dataUpdateUser.name){
      existingUser.changeName(dataUpdateUser.name);
    }

    if(dataUpdateUser.last_name){
      existingUser.changeLastName(dataUpdateUser.last_name);
    }
    if(dataUpdateUser.email){
      const existingEmailUser: UserModel | null = await this.userRepository.findByEmail(dataUpdateUser.email);
      if (existingEmailUser && existingEmailUser.id !== id) {
        throw new HttpException('El correo electrónico ya está en uso por otro usuario', HttpStatus.CONFLICT);
      }
      existingUser.changeEmail(dataUpdateUser.email);
    }

    if(dataUpdateUser.refresh_token){
      existingUser.changeRefreshToken(dataUpdateUser.refresh_token);
    }

    return this.userRepository.update(existingUser);
  }
}
