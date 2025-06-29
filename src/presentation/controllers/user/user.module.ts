import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '../../../aplication/use-cases/user/create-user.usecase';
import { UserRepositoryImpl } from '../../../infraestructure/database/typeorm/repositories/user/user.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrmEntity } from '../../../infraestructure/database/typeorm/entities/user.entity';
import { PasswordHashServiceImpl } from '../../../infraestructure/services/password-hash-service-impl';
import { MailerRepositoryImpl } from '../../../infraestructure/mailer/repositories/mailer.repository.impl';
import { InitRecoveryPasswordUseCase } from '../../../aplication/use-cases/user/init-recovery-password.usecase';
import { JwtRepositoryImpl } from '../../../infraestructure/jwt/jwt.repository.impl';
import { RecoveryPasswordUseCase } from '../../../aplication/use-cases/user/recovery-password-usecase';
import { UpdateUserUseCase } from '../../../aplication/use-cases/user/update-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrmEntity])],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    UpdateUserUseCase,
    InitRecoveryPasswordUseCase,
    RecoveryPasswordUseCase,
    {
      provide : 'PasswordHashRepository',
      useClass: PasswordHashServiceImpl,
    },
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl,
    },
    {
      provide : 'MailerRepository',
      useClass : MailerRepositoryImpl,
    },
    {
      provide : 'JwtRepository',
      useClass : JwtRepositoryImpl
    }
  ],
})
export class UserModule {}
