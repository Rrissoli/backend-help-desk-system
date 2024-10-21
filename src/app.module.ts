import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AgentTeamsModule } from './agent-teams/agent-teams.module';
import { AgentModule } from './agent/agent.module';
import { AuthModule } from './auth/auth.module';
import authConfig from './auth/config/auth.config';
import appConfig from './config/app.config';
import databaseConfig from './database/config/database.config';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { DemandAreaModule } from './demand-area/demand-area.module';
import { HomeModule } from './home/home.module';
import { InteractionModule } from './interaction/interaction.module';
import { KnowledgeBaseModule } from './knowledge-base/knowledge-base.module';
import mailConfig from './mail/config/mail.config';
import { MailModule } from './mail/mail.module';
import { MailerModule } from './mailer/mailer.module';
import { RolesModule } from './roles/roles.module';
import { SessionModule } from './session/session.module';
import { TeamDemandAreaModule } from './team-demand-area/team-demand-area.module';
import { TeamModule } from './team/team.module';
import { TicketModule } from './ticket/ticket.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, appConfig, mailConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),

    AuthModule,
    MailModule,
    MailerModule,
    HomeModule,
    AgentModule,
    TicketModule,
    InteractionModule,
    DemandAreaModule,
    TeamModule,
    AgentTeamsModule,
    TeamDemandAreaModule,
    KnowledgeBaseModule,
    UsersModule,
    SessionModule,
    RolesModule,
  ],
})
export class AppModule {}
