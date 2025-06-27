import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../../domain/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../../../../../domain/models/user/UserModel';
import { Repository } from 'typeorm';
import { UserOrmEntity } from '../../entities/user.entity';
import { UserMapper } from '../../../../mappers/user.mapper';
import { CreateUserModel } from '../../../../../domain/models/user/createUser.model';
import { UpdateUserModel } from '../../../../../domain/models/user/updateUser.model';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserOrmEntity) private readonly typeOrmDb: Repository<UserOrmEntity>
  ) {}

  async create(user: CreateUserModel): Promise<void> {
    try {
      await this.typeOrmDb.save(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    try {
      const data: UserOrmEntity | null = await this.typeOrmDb.findOne({ where: { email } });
      return UserMapper.toModel(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(user: UpdateUserModel): Promise<void> {
    try {
      const data: UserOrmEntity | null = await this.typeOrmDb.findOne({ where: { id: user.id } });
      if (!data) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      await this.typeOrmDb.save(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
