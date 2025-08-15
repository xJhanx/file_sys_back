import { InjectRepository } from '@nestjs/typeorm';
import { ProductOrmEntity } from '../../entities/product.entity';
import { Repository } from 'typeorm';
import { ProductRepository } from '../../../../../domain/repositories/product.repository';
import { CreateProductModel } from '../../../../../aplication/models/product/create-product';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectRepository(ProductOrmEntity) private readonly productDb: Repository<ProductOrmEntity>
  ) {}

  async create(product: CreateProductModel): Promise<void> {
    await this.productDb.save(product);
  }
  async findByName(name: string): Promise<any> {
    return await this.productDb.findOne({ where: { name } });
  }
}
