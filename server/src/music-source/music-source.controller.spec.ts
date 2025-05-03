import { Test, TestingModule } from '@nestjs/testing';
import { MusicSourceController } from './music-source.controller';
import { MusicSourceService } from './music-source.service';

describe('MusicSourceController', () => {
  let controller: MusicSourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicSourceController],
      providers: [MusicSourceService],
    }).compile();

    controller = module.get<MusicSourceController>(MusicSourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
