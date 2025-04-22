import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/models/User';

@Injectable()
export class CreateUserUseCase {
  constructor(@Inject('UserRepository') private readonly  userRepository : UserRepository) {}

  execute(user : User): Promise<void> {
    return this.userRepository.create(user);
  }
}