import { Body, Controller, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../aplication/use-cases/user/create-user.usecase';
import { CreateUserDto } from '../../dtos/user/create-user.dto';
import { RecoveryPasswordDto } from '../../dtos/user/recovery-password.dto';
import { InitRecoveryPasswordUseCase } from '../../../aplication/use-cases/user/init-recovery-password.usecase';
import { InitRecoveryPasswordDto } from '../../dtos/user/Init-recovery-password.dto';
import { RecoveryPasswordUseCase } from '../../../aplication/use-cases/user/recovery-password-usecase';
import { UpdateUserDto } from '../../dtos/user/update-user.dto';
import { UpdateUserUseCase } from '../../../aplication/use-cases/user/update-user.usecase';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly initRecoveryPasswordUseCase: InitRecoveryPasswordUseCase,
    private readonly recoveryPasswordUseCase: RecoveryPasswordUseCase,
    private readonly updateUserUseCase : UpdateUserUseCase
  ) {}

  @Post()
  async create(@Body() data: CreateUserDto): Promise<void> {
    await this.createUserUseCase.execute(data);
  }

  @Patch('/update/:id')
  async upadte(@Param('id') userId : number,@Body() data : UpdateUserDto): Promise<void> {
    await this.updateUserUseCase.execute(userId,data);
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
