import { Injectable } from '@nestjs/common';
import { PasswordHashRepository } from '../../domain/repositories/password.hash.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHashServiceImpl implements  PasswordHashRepository {
  private readonly saltRounds: number = 10;
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

}