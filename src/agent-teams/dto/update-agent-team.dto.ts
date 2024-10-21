import { PartialType } from '@nestjs/swagger';
import { CreateAgentTeamDto } from './create-agent-team.dto';

export class UpdateAgentTeamDto extends PartialType(CreateAgentTeamDto) {}
