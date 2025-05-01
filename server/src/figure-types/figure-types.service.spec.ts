import { Test, TestingModule } from '@nestjs/testing';
import { FigureTypesService } from './figure-types.service';

describe('FigureTypesService', () => {
  let service: FigureTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FigureTypesService],
    }).compile();

    service = module.get<FigureTypesService>(FigureTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
