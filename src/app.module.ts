import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './infraestructure/database/typeorm/typeorm.module';
import { UserModule } from './presentation/controllers/user/user.module';
import { CategoryModule } from './presentation/controllers/category/category.module';

@Module({
  imports: [TypeOrmConfigModule,UserModule, CategoryModule],
  providers: [],
})
export class AppModule {}
