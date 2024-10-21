import { Module } from '@nestjs/common';
import { DemandAreaService } from './demand-area.service';
import { DemandAreaController } from './demand-area.controller';

@Module({
  controllers: [DemandAreaController],
  providers: [DemandAreaService],
})
export class DemandAreaModule {}
