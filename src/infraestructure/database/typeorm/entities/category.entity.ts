import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}