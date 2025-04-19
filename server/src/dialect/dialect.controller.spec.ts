import { Test, TestingModule } from '@nestjs/testing';
import { DialectController } from './dialect.controller';
import { DialectService } from './dialect.service';

describe('DialectController', () => {
  let controller: DialectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DialectController],
      providers: [DialectService],
    }).compile();

    controller = module.get<DialectController>(DialectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
