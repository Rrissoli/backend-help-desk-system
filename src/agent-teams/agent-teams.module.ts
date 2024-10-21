import { Module } from '@nestjs/common';
import { AgentTeamsService } from './agent-teams.service';
import { AgentTeamsController } from './agent-teams.controller';

@Module({
  controllers: [AgentTeamsController],
  providers: [AgentTeamsService],
})
export class AgentTeamsModule {}
