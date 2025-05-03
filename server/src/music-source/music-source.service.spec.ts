import { Test, TestingModule } from '@nestjs/testing';
import { MusicSourceService } from './music-source.service';

describe('MusicSourceService', () => {
  let service: MusicSourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicSourceService],
    }).compile();

    service = module.get<MusicSourceService>(MusicSourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
