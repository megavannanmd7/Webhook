import { Module } from '@nestjs/common';
import { SlackModule } from './slack/slack.module';
import { JiraController } from './jira/jira.controller';
import { JiraModule } from './jira/jira.module';
import { GithubModule } from './github/github.module';

@Module({
  imports: [SlackModule,JiraModule,GithubModule],
})
export class AppModule {}
