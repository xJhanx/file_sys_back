import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/models/User';
import { PasswordHashRepository } from '../../../domain/repositories/password.hash.repository';
import { MailerRepository } from '../../../domain/repositories/mailer.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('PasswordHashRepository') private readonly passwordHasher: PasswordHashRepository,
    @Inject('MailerRepository') private readonly mailerRepository: MailerRepository
  ) {}

  async execute(user: User): Promise<User> {
    await this.validateExistingUser(user.email);
    const hashedPassword: string = await this.passwordHasher.hashPassword(user.password);
    user.modifyPassword(hashedPassword);
    await this.userRepository.create(user);
    await this.mailerRepository.sendEmail(user.email, "Hello ✔", 'Bienvenido a Sys Inventory');
    return user;
  }

  async validateExistingUser(email: string): Promise<void> {
    const existingUser: User | null = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new HttpException('El usuario ya se encuentra registrado', HttpStatus.CONFLICT);
    }
  }
}