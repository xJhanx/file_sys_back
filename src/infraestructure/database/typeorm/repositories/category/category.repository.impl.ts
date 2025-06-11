import { CategoryRepository } from '../../../../../domain/repositories/category.repository';
import { Category } from '../../../../../domain/models/Category';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryOrmEntity } from '../../entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryMapper } from '../../../../mappers/category.mapper';

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
      return CategoryMapper.toDomain(category);
    }
    return null;
  }
}
