import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DemandAreaService } from './demand-area.service';
import { CreateDemandAreaDto } from './dto/create-demand-area.dto';
import { UpdateDemandAreaDto } from './dto/update-demand-area.dto';

@Controller('demand-area')
export class DemandAreaController {
  constructor(private readonly demandAreaService: DemandAreaService) {}

  @Post()
  create(@Body() createDemandAreaDto: CreateDemandAreaDto) {
    return this.demandAreaService.create(createDemandAreaDto);
  }

  @Get()
  findAll() {
    return this.demandAreaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandAreaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDemandAreaDto: UpdateDemandAreaDto,
  ) {
    return this.demandAreaService.update(+id, updateDemandAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandAreaService.remove(+id);
  }
}
