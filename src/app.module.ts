import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurrDbModule } from './surr-db/surr-db.module';
import { SurrDbService } from './surr-db/surr-db.service';
import Surreal from 'surrealdb.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SurrDbModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, SurrDbService, Surreal],
})
export class AppModule {}
