import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserModel } from '../../../domain/models/user/user.model';
import { JwtRepository } from '../../../domain/repositories/jwt.repository';
import { MailerRepository } from '../../../domain/repositories/mailer.repository';

@Injectable()
export class InitRecoveryPasswordUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('JwtRepository') private readonly jwtRepository: JwtRepository,
    @Inject('MailerRepository') private readonly mailerRepository: MailerRepository
  ) {}

  async execute(email: string) {
    const user: UserModel | null = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new HttpException('No se encontro usuario con ese email', HttpStatus.NOT_FOUND);
    }
    const token: string = this.jwtRepository.generateTemporalToken({ user: user.id });
    const url: string = `${process.env.FRONTEND_URL}/recovery-password/${token}`;
    this.mailerRepository.sendRecoveryPasswordEmail(user.email, 'Recuperar contraseña', url);
  }
}
