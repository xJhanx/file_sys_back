import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '../../../aplication/use-cases/user/createUserUseCase';
import { UserRepositoryImpl } from '../../../infraestructure/database/typeorm/repositories/user/user.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrmEntity } from '../../../infraestructure/database/typeorm/entities/user.entity';
import { PasswordHashServiceImpl } from '../../../infraestructure/services/password-hash-service-impl.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrmEntity])],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PasswordHashServiceImpl,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [CreateUserUseCase],
})
export class UserModule {}
