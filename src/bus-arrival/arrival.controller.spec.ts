import { Test, TestingModule } from '@nestjs/testing';
import { StopsController } from './arrival.controller';
import { StopsService } from './arrival.service';

describe('StopsController', () => {
  let controller: StopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StopsController],
      providers: [StopsService],
    }).compile();

    controller = module.get<StopsController>(StopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
