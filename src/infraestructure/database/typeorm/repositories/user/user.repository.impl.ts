import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../../domain/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../../../../../domain/models/user/user.model';
import { Repository } from 'typeorm';
import { UserOrmEntity } from '../../entities/user.entity';
import { UserMapper } from '../../../../mappers/user.mapper';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserOrmEntity) private readonly typeOrmDb: Repository<UserOrmEntity>
  ) {}

  async create(data: UserModel): Promise<void> {
    try {
      const user = {
        name: data.name,
        last_name: data.last_name,
        email: data.email,
        password: data.password
      }
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

  async findById(id: number): Promise<UserModel | null> {
    try {
      const data: UserOrmEntity | null = await this.typeOrmDb.findOne({ where: { id } });
      return UserMapper.toModel(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(user: UserModel): Promise<void> {
    try {
      await this.typeOrmDb.save(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
