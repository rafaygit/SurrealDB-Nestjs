import { Test, TestingModule } from '@nestjs/testing';
import { SurrDbService } from './surr-db.service';

describe('SurrDbService', () => {
  let service: SurrDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurrDbService],
    }).compile();

    service = module.get<SurrDbService>(SurrDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
