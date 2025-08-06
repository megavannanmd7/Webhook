import {
  Controller,
  Post,
  Headers,
  Body,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { GithubService } from './github.service';
import * as crypto from 'crypto';

const GITHUB_SECRET = 'your-secret';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('events')
  async handleGithubEvent(
    @Headers('x-github-event') event: string,
    @Headers('x-hub-signature-256') signature256: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const payload = req.body;
    const rawBody = JSON.stringify(payload);

    const hmac = crypto.createHmac('sha256', GITHUB_SECRET);
    const digest = 'sha256=' + hmac.update(rawBody).digest('hex');

    if (signature256 !== digest) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Invalid signature' });
    }

    this.githubService.processEvent(event, payload);

    return res.status(HttpStatus.OK).json({ ok: true });
  }
}
