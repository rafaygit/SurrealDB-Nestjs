import { Test, TestingModule } from '@nestjs/testing';
import { SurrDbController } from './surr-db.controller';
import { SurrDbService } from './surr-db.service';

describe('SurrDbController', () => {
  let controller: SurrDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurrDbController],
      providers: [SurrDbService],
    }).compile();

    controller = module.get<SurrDbController>(SurrDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
