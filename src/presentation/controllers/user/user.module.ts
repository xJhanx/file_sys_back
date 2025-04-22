import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '../../../aplication/use-cases/user/createUserUseCase';
import { UserRepositoryImpl } from '../../../infraestructure/database/typeorm/repositories/user.repository.impl';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [CreateUserUseCase],
})
export class UserModule {}
