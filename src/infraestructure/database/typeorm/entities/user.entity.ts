import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class UserOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 100, nullable: false,unique:true })
  email: string;

  @Column({ type: 'text', nullable: true})
  refresh_token: string | null;

  @Column({ type: 'varchar', length: 200, nullable: false })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
