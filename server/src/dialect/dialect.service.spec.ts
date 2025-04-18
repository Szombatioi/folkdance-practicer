import { Test, TestingModule } from '@nestjs/testing';
import { DialectService } from './dialect.service';

describe('DialectService', () => {
  let service: DialectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DialectService],
    }).compile();

    service = module.get<DialectService>(DialectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
