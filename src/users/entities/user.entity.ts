import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Session } from '../../session/entities/session.entity';
import { EntityRelationalHelper } from '../../utils/relational-entity-helper';

@Entity()
export class User extends EntityRelationalHelper {
  static toDomain(user: User): User {
    // Implement the method to use the user parameter
    return user;
  }
  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: 'email' })
  provider: string;

  @Column({ nullable: true })
  socialId: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
  status: number;
  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];
}
