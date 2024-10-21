import { Injectable } from '@nestjs/common';
import { CreateDemandAreaDto } from './dto/create-demand-area.dto';
import { UpdateDemandAreaDto } from './dto/update-demand-area.dto';

@Injectable()
export class DemandAreaService {
  create(createDemandAreaDto: CreateDemandAreaDto) {
    // Use createDemandAreaDto to add a new demandArea
    return `This action adds a new demandArea with the following details: ${JSON.stringify(createDemandAreaDto)}`;
  }

  findAll() {
    return `This action returns all demandArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandArea`;
  }

  update(id: number, updateDemandAreaDto: UpdateDemandAreaDto) {
    // Use updateDemandAreaDto to update the demandArea
    return `This action updates a #${id} demandArea with the following details: ${JSON.stringify(updateDemandAreaDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandArea`;
  }
}
