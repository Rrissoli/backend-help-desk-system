import { Column, Entity, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { EntityRelationalHelper } from '../../utils/relational-entity-helper';
@Entity()
export class Role extends EntityRelationalHelper {
  @Column()
  name: string;
  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
