import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  create(createTicketDto: CreateTicketDto) {
    return `This action adds a new ticket with data: ${JSON.stringify(createTicketDto)}`;
  }

  findAll() {
    return `This action returns all ticket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket with data: ${JSON.stringify(updateTicketDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
