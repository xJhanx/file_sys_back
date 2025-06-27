import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserModel } from '../../../domain/models/user/UserModel';
import { PasswordHashRepository } from '../../../domain/repositories/password.hash.repository';
import { MailerRepository } from '../../../domain/repositories/mailer.repository';
import { CreateUserDtoMapper } from '../../../presentation/mappers/user/createUserDtoMapper';
import { CreateUserDto } from '../../../presentation/dtos/user/user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('PasswordHashRepository') private readonly passwordHasher: PasswordHashRepository,
    @Inject('MailerRepository') private readonly mailerRepository: MailerRepository
  ) {}

  async execute(user: CreateUserDto): Promise<void> {
    const userModel = CreateUserDtoMapper.toModel(user);
    await this.validateExistingUser(user.email);
    const hashedPassword: string = await this.passwordHasher.hashPassword(user.password);
    userModel.modifyPassword(hashedPassword);
    await this.userRepository.create(userModel);
    await this.mailerRepository.sendWelcomeEmail(user.email, "Hello ✔");
  }

  async validateExistingUser(email: string): Promise<void> {
    const existingUser: UserModel | null = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new HttpException('El usuario ya se encuentra registrado con el correo electronico suministrado', HttpStatus.CONFLICT);
    }
  }
}