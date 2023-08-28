import { Test, TestingModule } from '@nestjs/testing';
import { MemberServiceController } from './member-service.controller';
import { MemberServiceService } from './member-service.service';

describe('MemberServiceController', () => {
  let controller: MemberServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberServiceController],
      providers: [MemberServiceService],
    }).compile();

    controller = module.get<MemberServiceController>(MemberServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
