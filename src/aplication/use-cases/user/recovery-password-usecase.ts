import { UserRepository } from '../../../domain/repositories/user.repository';
import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { JwtRepository } from '../../../domain/repositories/jwt.repository';
import { MailerRepository } from '../../../domain/repositories/mailer.repository';
import { UserModel } from '../../../domain/models/user/user.model';
import { StatusToken } from '../../../infraestructure/interfaces/jwt/statusToken.interface';
import { PasswordHashRepository } from '../../../domain/repositories/password-hash.repository';

export class RecoveryPasswordUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('JwtRepository') private readonly jwtRepository: JwtRepository,
    @Inject('MailerRepository') private readonly mailerRepository: MailerRepository,
    @Inject('PasswordHashRepository') private readonly passwordHasher: PasswordHashRepository
  ) {}

  async execute(email: string, password: string, token: string) {
    const user: UserModel | null = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new HttpException('No se encontro usuario con ese email', HttpStatus.NOT_FOUND);
    }
    const isValidToken: StatusToken = this.jwtRepository.validateToken(token);
    if (!isValidToken.isValid) {
      throw new HttpException('El token no es valido', HttpStatus.UNAUTHORIZED);
    }
    const hashedPassword: string = await this.passwordHasher.hashPassword(password);
    user.modifyPassword(hashedPassword);
    await this.userRepository.update(user);
    this.mailerRepository.sendSuccessUpdatedPasswordEmail(user.email, 'Contraseña actualizada');
  }
}
