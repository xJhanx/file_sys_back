import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProductOrmEntity } from './product.entity';

@Entity('category')
export class CategoryOrmEntity {

  @PrimaryGeneratedColumn()
  id : number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name : string;

  @Column({ type: 'text', nullable: false })
  description : string;

  @Column({type: 'int', nullable: true})
  code : number;

  @OneToMany( () => ProductOrmEntity, (product: ProductOrmEntity) => product.category )
  products : ProductOrmEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}