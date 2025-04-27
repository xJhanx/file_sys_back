import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/models/User';
import { PasswordHashServiceImpl } from '../../../infraestructure/services/password-hash-service-impl.service';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHashServiceImpl
  ) {}

  async execute(user: User): Promise<User> {
    await this.validateExistingUser(user.email);
    const hashedPassword: string = await this.passwordHasher.hashPassword(user.password);
    user.modifyPassword(hashedPassword);
    return this.userRepository.create(user);
  }

  async validateExistingUser(email: string): Promise<void> {
    const existingUser: User | null = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new HttpException('El usuario ya se encuentra registrado', HttpStatus.CONFLICT);
    }
  }
}