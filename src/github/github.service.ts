import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GithubService {
  private readonly logger = new Logger(GithubService.name);

  processEvent(eventType: string, payload: Record<string, unknown>): void {
    this.logger.log(`GitHub Event Received: ${eventType}`);
    this.logger.log('Payload:')
    console.log(payload)
  }
}
