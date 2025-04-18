import { Test, TestingModule } from '@nestjs/testing';
import { DanceService } from './dance.service';

describe('DanceService', () => {
  let service: DanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanceService],
    }).compile();

    service = module.get<DanceService>(DanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
