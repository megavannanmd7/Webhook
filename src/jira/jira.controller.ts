import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { JiraService } from './jira.service';

@Controller('jira')
export class JiraController {
  constructor(private readonly jiraService: JiraService) {}

  @Post('events')
  async handleJiraEvents(@Body() body: any, @Res() res: Response) {
    this.jiraService.processEvent(body);
    return res.status(HttpStatus.OK).json({ ok: true });
  }
}
