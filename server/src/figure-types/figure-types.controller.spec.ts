import { Test, TestingModule } from '@nestjs/testing';
import { FigureTypesController } from './figure-types.controller';
import { FigureTypesService } from './figure-types.service';

describe('FigureTypesController', () => {
  let controller: FigureTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FigureTypesController],
      providers: [FigureTypesService],
    }).compile();

    controller = module.get<FigureTypesController>(FigureTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
