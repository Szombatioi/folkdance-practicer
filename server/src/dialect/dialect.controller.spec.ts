import { Test, TestingModule } from '@nestjs/testing';
import { DialectController } from './dialect.controller';

describe('DialectController', () => {
  let controller: DialectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DialectController],
    }).compile();

    controller = module.get<DialectController>(DialectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
