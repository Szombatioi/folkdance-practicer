import { Test, TestingModule } from '@nestjs/testing';
import { DanceTypesController } from './dance-types.controller';
import { DanceTypesService } from './dance-types.service';

describe('DanceTypesController', () => {
  let controller: DanceTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanceTypesController],
      providers: [DanceTypesService],
    }).compile();

    controller = module.get<DanceTypesController>(DanceTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
