import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './infraestructure/database/typeorm/typeorm.module';
import { UserModule } from './presentation/controllers/user/user.module';

@Module({
  imports: [TypeOrmConfigModule,UserModule],
  providers: [],
})
export class AppModule {}
