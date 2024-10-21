import { Injectable } from '@nestjs/common';
import { CreateTeamDemandAreaDto } from './dto/create-team-demand-area.dto';
import { UpdateTeamDemandAreaDto } from './dto/update-team-demand-area.dto';

@Injectable()
export class TeamDemandAreaService {
  create(createTeamDemandAreaDto: CreateTeamDemandAreaDto) {
    return 'This action adds a new teamDemandArea';
  }

  findAll() {
    return `This action returns all teamDemandArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamDemandArea`;
  }

  update(id: number, updateTeamDemandAreaDto: UpdateTeamDemandAreaDto) {
    return `This action updates a #${id} teamDemandArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamDemandArea`;
  }
}
