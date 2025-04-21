import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './infraestructure/database/typeorm/typeorm.module';

@Module({
  imports: [TypeOrmConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
