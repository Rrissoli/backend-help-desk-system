import { Module } from '@nestjs/common';
import { TeamDemandAreaService } from './team-demand-area.service';
import { TeamDemandAreaController } from './team-demand-area.controller';

@Module({
  controllers: [TeamDemandAreaController],
  providers: [TeamDemandAreaService],
})
export class TeamDemandAreaModule {}
