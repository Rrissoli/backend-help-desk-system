import { Injectable } from '@nestjs/common';
import { CreateDemandAreaDto } from './dto/create-demand-area.dto';
import { UpdateDemandAreaDto } from './dto/update-demand-area.dto';

@Injectable()
export class DemandAreaService {
  create(createDemandAreaDto: CreateDemandAreaDto) {
    return 'This action adds a new demandArea';
  }

  findAll() {
    return `This action returns all demandArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandArea`;
  }

  update(id: number, updateDemandAreaDto: UpdateDemandAreaDto) {
    return `This action updates a #${id} demandArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandArea`;
  }
}
