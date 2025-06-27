import { CategoryRepository } from '../../../../../domain/repositories/category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryOrmEntity } from '../../entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryOrmMapper } from '../../../../mappers/category.mapper';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CategoryModel } from '../../../../../domain/models/category/category.model';
import { CreateCategoryModel } from '../../../../../domain/models/category/createCategory.model';
import { UpdateCategoryModel } from '../../../../../domain/models/category/updateCategory.model';

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
