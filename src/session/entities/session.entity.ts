import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { EntityRelationalHelper } from '../../utils/relational-entity-helper';

@Entity()
export class Session extends EntityRelationalHelper {
  @Column({ type: 'varchar', length: 255 })
  hash: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.sessions)
  user: User;
}
