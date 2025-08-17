import { InjectRepository } from '@nestjs/typeorm';
import { ProductOrmEntity } from '../../entities/product.entity';
import { Repository } from 'typeorm';
import { ProductRepository } from '../../../../../domain/repositories/product.repository';
import { ProductModel } from '../../../../../domain/models/product/product.model';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectRepository(ProductOrmEntity) private readonly productDb: Repository<ProductOrmEntity>
  ) {}

  async create(data: ProductModel): Promise<void> {
    const product = {
      name : data.name,
      description : data.description,
      price : data.price,
      stock : data.stock,
      category : { id: data.category_id },
      expires_at : data.expires_at
    }
    await this.productDb.save(product);
  }
  async findByName(name: string): Promise<any> {
    return await this.productDb.findOne({ where: { name } });
  }
}
