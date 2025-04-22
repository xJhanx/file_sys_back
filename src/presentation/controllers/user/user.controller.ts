import { Controller, Get } from '@nestjs/common';
import { CreateUserUseCase } from '../../../aplication/use-cases/user/createUserUseCase';
import { User } from '../../../domain/models/User';

@Controller('user')
export class UserController {
  constructor(private readonly  createUserUseCase : CreateUserUseCase) {}
  
  @Get()
  async create( ) : Promise<void>{
    const user : User = {
        id: 0,
        name: 'Lucas',
        password : '123456',
        email : 'test',
        refresh_token : '123456',
        created_at : new Date(),
        updated_at : new Date(),
    }
   return this.createUserUseCase.execute(user);
  }
}
