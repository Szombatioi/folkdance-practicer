import { Test, TestingModule } from '@nestjs/testing';
import { DanceCategoriesService } from './dance-categories.service';

describe('DanceCategoriesService', () => {
  let service: DanceCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanceCategoriesService],
    }).compile();

    service = module.get<DanceCategoriesService>(DanceCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
