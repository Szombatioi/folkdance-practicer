import { Test, TestingModule } from '@nestjs/testing';
import { DanceNotesService } from './dance-notes.service';

describe('DanceNotesService', () => {
  let service: DanceNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanceNotesService],
    }).compile();

    service = module.get<DanceNotesService>(DanceNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
