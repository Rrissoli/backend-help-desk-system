import { Test, TestingModule } from '@nestjs/testing';
import { DemandAreaController } from './demand-area.controller';
import { DemandAreaService } from './demand-area.service';

describe('DemandAreaController', () => {
  let controller: DemandAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandAreaController],
      providers: [DemandAreaService],
    }).compile();

    controller = module.get<DemandAreaController>(DemandAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
