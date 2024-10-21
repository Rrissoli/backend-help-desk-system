import { Injectable } from '@nestjs/common';
import { CreateAgentTeamDto } from './dto/create-agent-team.dto';
import { UpdateAgentTeamDto } from './dto/update-agent-team.dto';

@Injectable()
export class AgentTeamsService {
  create(createAgentTeamDto: CreateAgentTeamDto) {
    return 'This action adds a new agentTeam';
  }

  findAll() {
    return `This action returns all agentTeams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agentTeam`;
  }

  update(id: number, updateAgentTeamDto: UpdateAgentTeamDto) {
    return `This action updates a #${id} agentTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} agentTeam`;
  }
}
