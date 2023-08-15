import { Module } from '@nestjs/common';
import { SurrDbService } from './surr-db.service';
import { SurrDbController } from './surr-db.controller';
import Surreal from 'surrealdb.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SurrDbController],
  providers: [SurrDbService, Surreal],
})
export class SurrDbModule {}
