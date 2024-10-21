import { Test, TestingModule } from '@nestjs/testing';
import { TeamDemandAreaService } from './team-demand-area.service';

describe('TeamDemandAreaService', () => {
  let service: TeamDemandAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamDemandAreaService],
    }).compile();

    service = module.get<TeamDemandAreaService>(TeamDemandAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
