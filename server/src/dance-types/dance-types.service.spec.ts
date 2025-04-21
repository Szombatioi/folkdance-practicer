import { Test, TestingModule } from '@nestjs/testing';
import { DanceTypesService } from './dance-types.service';

describe('DanceTypesService', () => {
  let service: DanceTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanceTypesService],
    }).compile();

    service = module.get<DanceTypesService>(DanceTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
