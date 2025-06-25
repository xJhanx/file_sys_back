import { CategoryRepository } from '../../../../../domain/repositories/category.repository';
import { Category } from '../../../../../domain/models/Category';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryOrmEntity } from '../../entities/category.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CategoryOrmMapper } from '../../../../mappers/category.mapper';
import { HttpException, HttpStatus } from '@nestjs/common';

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(
    @InjectRepository(CategoryOrmEntity) private readonly typeOrmDb: Repository<CategoryOrmEntity>
  ) {}

  async create(data: Category): Promise<void> {
    await this.typeOrmDb.save(data);
  }

  async findByName(name: string): Promise<Category | null> {
    const category: CategoryOrmEntity | null = await this.typeOrmDb.findOne({ where: { name } });
    if (category) {
      return CategoryOrmMapper.ormToModel(category);
    }
    return null;
  }

async findById(id: number): Promise<Category | null> {
    const category: CategoryOrmEntity | null = await this.typeOrmDb.findOne({ where: { id } });
    if (category) {
      return CategoryOrmMapper.ormToModel(category);
    }
    return null;
}

async update(data: Category): Promise<void> {
    await this.typeOrmDb.save(data);
}

  async delete(id: number): Promise<void> {
    const category: CategoryOrmEntity | null = await this.typeOrmDb.findOne({ where: { id } });
    if (!category) {
      throw new HttpException('La categoria no existe', HttpStatus.NOT_FOUND);
    }
    await this.typeOrmDb.remove(category);
  }
}
