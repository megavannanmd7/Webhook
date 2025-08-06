import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { SlackService } from './slack.service'; // adjust path if needed

@Controller('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @Post('events')
  async handleSlackEvents(@Body() body: any, @Res() res: Response) {
    // Slack URL verification
    if (body?.type === 'url_verification' && body?.challenge) {
      return res.status(HttpStatus.OK).send(body.challenge);
    }
    this.slackService.processEvent(body); 
    return res.status(HttpStatus.OK).json({ ok: true });
  }
}
