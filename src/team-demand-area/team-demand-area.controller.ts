import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamDemandAreaService } from './team-demand-area.service';
import { CreateTeamDemandAreaDto } from './dto/create-team-demand-area.dto';
import { UpdateTeamDemandAreaDto } from './dto/update-team-demand-area.dto';

@Controller('team-demand-area')
export class TeamDemandAreaController {
  constructor(private readonly teamDemandAreaService: TeamDemandAreaService) {}

  @Post()
  create(@Body() createTeamDemandAreaDto: CreateTeamDemandAreaDto) {
    return this.teamDemandAreaService.create(createTeamDemandAreaDto);
  }

  @Get()
  findAll() {
    return this.teamDemandAreaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamDemandAreaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeamDemandAreaDto: UpdateTeamDemandAreaDto,
  ) {
    return this.teamDemandAreaService.update(+id, updateTeamDemandAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamDemandAreaService.remove(+id);
  }
}
