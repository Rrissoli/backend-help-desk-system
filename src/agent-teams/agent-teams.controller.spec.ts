import { Test, TestingModule } from '@nestjs/testing';
import { AgentTeamsController } from './agent-teams.controller';
import { AgentTeamsService } from './agent-teams.service';

describe('AgentTeamsController', () => {
  let controller: AgentTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentTeamsController],
      providers: [AgentTeamsService],
    }).compile();

    controller = module.get<AgentTeamsController>(AgentTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
