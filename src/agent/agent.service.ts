import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentService {
  create(createAgentDto: CreateAgentDto) {
    // Use createAgentDto to add a new agent
    return `This action adds a new agent with the following details: ${JSON.stringify(createAgentDto)}`;
  }

  findAll() {
    return `This action returns all agent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    // Use updateAgentDto to update the agent details
    return `This action updates a #${id} agent with the following details: ${JSON.stringify(updateAgentDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}
