import { Test, TestingModule } from '@nestjs/testing';
import { DanceController } from './dance.controller';
import { DanceService } from './dance.service';

describe('DanceController', () => {
  let controller: DanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanceController],
      providers: [DanceService],
    }).compile();

    controller = module.get<DanceController>(DanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
