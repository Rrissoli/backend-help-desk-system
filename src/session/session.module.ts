import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './entities/session.entity';
import { SessionService } from './session.service';

@Module({
  imports: [TypeOrmModule.forFeature([Session])],
  providers: [SessionService],
  exports: [SessionService], // Exportar para que outros módulos possam usar
})
export class SessionModule {}
