import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../aplication/use-cases/user/createUserUseCase';
import { CreateUserDto } from '../../dtos/user/user.dto';
import { User } from '../../../domain/models/User';

@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() data: CreateUserDto): Promise<void> {
    const user: User = new User(
      data.name,
      data.last_name,
      data.email,
      data.refresh_token,
      data.password
    );
    await this.createUserUseCase.execute(user);
  }
}
