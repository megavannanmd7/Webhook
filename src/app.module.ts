import { Module } from '@nestjs/common';
import { SlackModule } from './slack/slack.module';
import { JiraController } from './jira/jira.controller';
import { JiraModule } from './jira/jira.module';

@Module({
  imports: [SlackModule,JiraModule],
})
export class AppModule {}
