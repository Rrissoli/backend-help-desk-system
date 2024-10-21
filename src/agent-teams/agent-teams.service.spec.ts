import { Test, TestingModule } from '@nestjs/testing';
import { AgentTeamsService } from './agent-teams.service';

describe('AgentTeamsService', () => {
  let service: AgentTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentTeamsService],
    }).compile();

    service = module.get<AgentTeamsService>(AgentTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
