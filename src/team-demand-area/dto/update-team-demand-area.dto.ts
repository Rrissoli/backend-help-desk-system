import { PartialType } from '@nestjs/swagger';
import { CreateTeamDemandAreaDto } from './create-team-demand-area.dto';

export class UpdateTeamDemandAreaDto extends PartialType(
  CreateTeamDemandAreaDto,
) {}
