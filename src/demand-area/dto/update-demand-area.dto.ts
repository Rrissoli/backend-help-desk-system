import { PartialType } from '@nestjs/swagger';
import { CreateDemandAreaDto } from './create-demand-area.dto';

export class UpdateDemandAreaDto extends PartialType(CreateDemandAreaDto) {}
