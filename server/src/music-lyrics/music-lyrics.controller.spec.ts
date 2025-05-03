import { Test, TestingModule } from '@nestjs/testing';
import { MusicLyricsController } from './music-lyrics.controller';
import { MusicLyricsService } from './music-lyrics.service';

describe('MusicLyricsController', () => {
  let controller: MusicLyricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicLyricsController],
      providers: [MusicLyricsService],
    }).compile();

    controller = module.get<MusicLyricsController>(MusicLyricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
