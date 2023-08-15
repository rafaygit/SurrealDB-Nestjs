import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Express } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3000);
}
bootstrap();
