import { Test, TestingModule } from '@nestjs/testing';
import { MusicLyricsService } from './music-lyrics.service';

describe('MusicLyricsService', () => {
  let service: MusicLyricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicLyricsService],
    }).compile();

    service = module.get<MusicLyricsService>(MusicLyricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
