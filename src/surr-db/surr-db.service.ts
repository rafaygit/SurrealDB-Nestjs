import { Injectable, Inject } from '@nestjs/common';
import { CreateSurrDbDto } from './dto/create-surr-db.dto';
import { UpdateSurrDbDto } from './dto/update-surr-db.dto';
import Surreal from 'surrealdb.js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SurrDbService {
  constructor(private config: ConfigService, private db: Surreal) {
    this.db = new Surreal(config.get('SURREAL_DB_URL'));
    this.db.signin({
      user: 'root',
      pass: 'root',
    });
    this.db.use('test', 'test');
    const check = config.get('SURREAL_DB_URL');
    console.log('This is the surreal instance:');
    console.log(db);
  }

  async connect() {}
  async createSurrealDB(tableDB: string, data: any) {
    return await this.db.create(tableDB, data);
  }

  async create(table: string, record: any): Promise<any> {
    return await this.db.create(table, record);
  }

  async update(table: string, id: string, data: any): Promise<any> {
    return await this.db.change(`${table}:${id}`, data);
  }

  async select(table: string): Promise<any[]> {
    return await this.db.select(table);
  }

  async query(queryString: string, params: any): Promise<any[]> {
    return await this.db.query(queryString, params);
  }
}
