import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  async create(data: { user: User; hash: string }): Promise<Session> {
    const session = this.sessionRepository.create(data);
    return await this.sessionRepository.save(session);
  }

  async findById(id: number): Promise<Session | null> {
    const session = await this.sessionRepository.findOne({ where: { id } });
    if (!session) {
      throw new Error(`Session with id ${id} not found`);
    }
    return session;
  }

  async deleteById(id: number): Promise<void> {
    await this.sessionRepository.delete(id);
  }

  async deleteByUserId({ userId }: { userId: number }): Promise<void> {
    await this.sessionRepository.delete({ user: { id: userId } });
  }
  async update(
    sessionId: number,
    updateData: Partial<Session>,
  ): Promise<void> {}

  async deleteByUserIdWithExclude({
    userId,
    excludeSessionId,
  }: {
    userId: number;
    excludeSessionId: number;
  }): Promise<void> {
    await this.sessionRepository.delete({
      user: { id: userId },
      id: Not(excludeSessionId),
    });
  }
}
