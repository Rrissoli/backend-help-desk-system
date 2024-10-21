import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgentTeamsService } from './agent-teams.service';
import { CreateAgentTeamDto } from './dto/create-agent-team.dto';
import { UpdateAgentTeamDto } from './dto/update-agent-team.dto';

@Controller('agent-teams')
export class AgentTeamsController {
  constructor(private readonly agentTeamsService: AgentTeamsService) {}

  @Post()
  create(@Body() createAgentTeamDto: CreateAgentTeamDto) {
    return this.agentTeamsService.create(createAgentTeamDto);
  }

  @Get()
  findAll() {
    return this.agentTeamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentTeamsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAgentTeamDto: UpdateAgentTeamDto,
  ) {
    return this.agentTeamsService.update(+id, updateAgentTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentTeamsService.remove(+id);
  }
}
