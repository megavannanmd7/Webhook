import { Controller, Post, Headers, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('events')
  async handleGithubEvents(
    @Headers('x-github-event') event: string,
    @Body() body: any,
    @Res() res: Response,
  ) {
    // Optionally log headers or event type
    this.githubService.processEvent(event, body);

    return res.status(HttpStatus.OK).json({ ok: true });
  }
}
