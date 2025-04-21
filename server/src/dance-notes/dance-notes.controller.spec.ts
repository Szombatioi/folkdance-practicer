import { Test, TestingModule } from '@nestjs/testing';
import { DanceNotesController } from './dance-notes.controller';
import { DanceNotesService } from './dance-notes.service';

describe('DanceNotesController', () => {
  let controller: DanceNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanceNotesController],
      providers: [DanceNotesService],
    }).compile();

    controller = module.get<DanceNotesController>(DanceNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
