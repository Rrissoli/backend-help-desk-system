import { Test, TestingModule } from '@nestjs/testing';
import { TeamDemandAreaController } from './team-demand-area.controller';
import { TeamDemandAreaService } from './team-demand-area.service';

describe('TeamDemandAreaController', () => {
  let controller: TeamDemandAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamDemandAreaController],
      providers: [TeamDemandAreaService],
    }).compile();

    controller = module.get<TeamDemandAreaController>(TeamDemandAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
