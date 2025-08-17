import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryOrmEntity } from '../../entities/category.entity';
import { CategoryOrmMapper } from '../../../../mappers/category.mapper';
import { CategoryRepository } from '../../../../../domain/repositories/category.repository';
import { CategoryModel } from '../../../../../domain/models/category/category.model';

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(
    @InjectRepository(CategoryOrmEntity) private readonly typeOrmDb: Repository<CategoryOrmEntity>
  ) {}

  async create(data: any): Promise<void> {
    await this.typeOrmDb.save(data);
  }

  async findByName(name: string): Promise<CategoryModel | null> {
    const category: CategoryOrmEntity | null = await this.typeOrmDb.findOne({ where: { name } });
    if (category) {
      return CategoryOrmMapper.ormToModel(category);
    }
    return null;
  }

async findById(id: number): Promise<CategoryModel | null> {
    const category: CategoryOrmEntity | null = await this.typeOrmDb.findOne({ where: { id } });
    if (category) {
      return CategoryOrmMapper.ormToModel(category);
    }
    return null;
}

async update(data: CategoryModel): Promise<void> {
    const category = {
      id: data.id,
      name: data.name,
      description: data.description,
      code: data.code,
      created_at: data.created_at,
      updated_at: data.updated_at
    }
    await this.typeOrmDb.save(category);
}

  async delete(id: number): Promise<void> {
    const category: CategoryOrmEntity | null = await this.typeOrmDb.findOne({ where: { id } });
    if (!category) {
      throw new HttpException('La categoria no existe', HttpStatus.NOT_FOUND);
    }
    await this.typeOrmDb.remove(category);
  }
}
