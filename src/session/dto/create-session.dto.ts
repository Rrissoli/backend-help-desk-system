import { User } from '../../users/entities/user.entity';

export class CreateSessionDto {
  user: User;

  hash: string;
}
