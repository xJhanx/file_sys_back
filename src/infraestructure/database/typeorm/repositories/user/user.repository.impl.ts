import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../../domain/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../../domain/models/User';
import { Repository } from 'typeorm';
import { UserOrmEntity } from '../../entities/user.entity';
import { UserMapper } from '../../../../mappers/user.mapper';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserOrmEntity) private readonly typeOrmDb: Repository<UserOrmEntity>
  ) {}

  async create(user: User): Promise<User> {
    try {
      return await this.typeOrmDb.save(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const data: UserOrmEntity | null = await this.typeOrmDb.findOne({ where: { email } });
      return UserMapper.toModel(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(user: User): Promise<User> {
    try {
      const data: UserOrmEntity | null = await this.typeOrmDb.findOne({ where: { id: user.id } });
      if (!data) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return await this.typeOrmDb.save(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
