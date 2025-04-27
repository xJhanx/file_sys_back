import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { VersioningOptions } from '@nestjs/common/interfaces/version-options.interface';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options : VersioningOptions   = {
    type : VersioningType.URI,
     prefix : 'api/v',
    defaultVersion : '1',
  }
  app.enableVersioning(options);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
