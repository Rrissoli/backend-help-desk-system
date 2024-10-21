import { Injectable } from '@nestjs/common';
import { CreateInteractionDto } from './dto/create-interaction.dto';
import { UpdateInteractionDto } from './dto/update-interaction.dto';

@Injectable()
export class InteractionService {
  create(createInteractionDto: CreateInteractionDto) {
    return `This action adds a new interaction with the following details: ${JSON.stringify(createInteractionDto)}`;
  }

  findAll() {
    return `This action returns all interaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interaction`;
  }

  update(id: number, updateInteractionDto: UpdateInteractionDto) {
    return `This action updates a #${id} interaction with the following details: ${JSON.stringify(updateInteractionDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} interaction`;
  }
}
