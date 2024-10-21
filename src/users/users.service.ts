import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  async findById(userId: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id: userId } });
  }
  userRepository: any;
  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  create(userData: Partial<User>): Promise<User> {
    const user = new User();

    Object.assign(user, userData);

    return Promise.resolve(user);
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user with data: ${JSON.stringify(updateUserDto)}`;
  }
  async findByEmail(email: string): Promise<User | undefined> {
    // Implementation to find a user by email

    return await this.userRepository.findOne({ where: { email } });
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
