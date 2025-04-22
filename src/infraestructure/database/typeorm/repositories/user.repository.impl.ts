import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../domain/repositories/user.repository';
import { User } from '../../../../domain/models/User';


@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor() {}

  async create(user : User): Promise<void> {
    console.log('Saving user to database');
  }
}
