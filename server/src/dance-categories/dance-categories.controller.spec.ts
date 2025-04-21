import { Test, TestingModule } from '@nestjs/testing';
import { DanceCategoriesController } from './dance-categories.controller';
import { DanceCategoriesService } from './dance-categories.service';

describe('DanceCategoriesController', () => {
  let controller: DanceCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanceCategoriesController],
      providers: [DanceCategoriesService],
    }).compile();

    controller = module.get<DanceCategoriesController>(DanceCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
