import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  create(createRoleDto: CreateRoleDto) {
    // Use createRoleDto to add a new role
    return `This action adds a new role with the following details: ${JSON.stringify(createRoleDto)}`;
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    // Use updateRoleDto to update the role
    return `This action updates a #${id} role with the following details: ${JSON.stringify(updateRoleDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
