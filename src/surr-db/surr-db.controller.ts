import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SurrDbService } from './surr-db.service';
import { CreateSurrDbDto } from './dto/create-surr-db.dto';
import { UpdateSurrDbDto } from './dto/update-surr-db.dto';

@Controller('surr-db')
export class SurrDbController {
  constructor(private surrDbService: SurrDbService) {}

  @Post('connect')
  async connect() {
    try {
      return await this.surrDbService.connect();
    } catch (e) {
      console.log(e);
    }
  }
  @Post(':tableDB')
  // Get data from request body
  async surrealDBPost(
    @Body('first') first: string,
    @Body('last') last: string,
    @Body('uname') uname: string,
    @Body('title') title: string,
    @Param('tableDB') tableDB: string,
  ) {
    const data = { first, last, uname, title };
    return this.surrDbService.createSurrealDB(tableDB, data);
  }
  @Post(':table')
  async create(@Body() record: any, @Param('table') table: string) {
    return await this.surrDbService.create(table, record);
  }

  @Post('update/:table/:id')
  async update(
    @Param('table') table: string,
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return this.surrDbService.update(table, id, data);
  }

  @Get('select/:table')
  async select(@Param('table') table: string) {
    return this.surrDbService.select(table);
  }

  @Post('query')
  async query(@Body() body: { query: string; params: any }) {
    const { query, params } = body;
    return this.surrDbService.query(query, params);
  }
}
