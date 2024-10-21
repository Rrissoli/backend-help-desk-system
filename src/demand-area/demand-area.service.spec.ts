import { Test, TestingModule } from '@nestjs/testing';
import { DemandAreaService } from './demand-area.service';

describe('DemandAreaService', () => {
  let service: DemandAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandAreaService],
    }).compile();

    service = module.get<DemandAreaService>(DemandAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
