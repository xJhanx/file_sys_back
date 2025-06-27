import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../aplication/use-cases/user/createUserUseCase';
import { CreateUserDto } from '../../dtos/user/user.dto';
import { RecoveryPasswordDto } from '../../dtos/user/recovery-password.dto';
import { InitRecoveryPasswordUseCase } from '../../../aplication/use-cases/user/initRecoveryPasswordUseCase';
import { InitRecoveryPasswordDto } from '../../dtos/user/InitRecoveryPassword.dto';
import { RecoveryPasswordUseCase } from '../../../aplication/use-cases/user/recoveryPasswordUseCase';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly initRecoveryPasswordUseCase: InitRecoveryPasswordUseCase,
    private readonly recoveryPasswordUseCase: RecoveryPasswordUseCase
  ) {}

  @Post()
  async create(@Body() data: CreateUserDto): Promise<void> {
    await this.createUserUseCase.execute(data);
  }

  @Post('recovery-password-process')
  async initRecoveryPasswordProcess(@Body() data: InitRecoveryPasswordDto): Promise<void> {
    try {
      await this.initRecoveryPasswordUseCase.execute(data.email);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException('Unexpected error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('recovery-password')
  async recoveryPassword(@Body() data: RecoveryPasswordDto): Promise<void> {
    try {
      await this.recoveryPasswordUseCase.execute(data.email, data.password, data.token);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException('Unexpected error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
