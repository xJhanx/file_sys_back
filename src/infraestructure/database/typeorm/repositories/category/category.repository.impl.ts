import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryOrmEntity } from '../../entities/category.entity';
import { CategoryOrmMapper } from '../../../../mappers/category.mapper';
import { CategoryRepository } from '../../../../../domain/repositories/category.repository';
import { CreateCategoryModel } from '../../../../../domain/models/category/create-category.model';
import { UpdateCategoryModel } from '../../../../../domain/models/category/update-category.model';
import { CategoryModel } from '../../../../../domain/models/category/category.model';

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(
    @InjectRepository(CategoryOrmEntity) private readonly typeOrmDb: Repository<CategoryOrmEntity>
  ) {}

  async create(data: CreateCategoryModel): Promise<void> {
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

async update(data: UpdateCategoryModel): Promise<void> {
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
